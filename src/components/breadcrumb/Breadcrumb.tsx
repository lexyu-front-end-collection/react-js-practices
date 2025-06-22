import { useLocation, Link } from '@tanstack/react-router'
import { routes, type SidebarRoute, ROUTE_PATHS } from '@/constants/routes'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'

export function SimpleBreadcrumb() {
    const location = useLocation()
    const currentPath = location.pathname

    // 首頁
    if (currentPath === ROUTE_PATHS.HOME || currentPath === '/') {
        return (
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Home
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        )
    }

    // 建立麵包屑路徑
    const breadcrumbPath = buildBreadcrumbPath(currentPath)

    // 找不到路由
    if (breadcrumbPath.length === 0) {
        return (
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/" className="flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                Home
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Unknown Page</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        )
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbPath.map((route, index) => (
                    <BreadcrumbItemWithSeparator
                        key={route.path || `${route.title}-${index}`}
                        route={route}
                        isFirst={index === 0}
                        isLast={index === breadcrumbPath.length - 1}
                    />
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

function BreadcrumbItemWithSeparator({
    route,
    isFirst,
    isLast
}: {
    route: SidebarRoute
    isFirst: boolean
    isLast: boolean
}) {
    const isHome = route.path === ROUTE_PATHS.HOME
    const linkTo = isHome ? "/" : route.path!

    return (
        <>
            {!isFirst && <BreadcrumbSeparator />}
            <BreadcrumbItem>
                {isLast ? (
                    <BreadcrumbPage className="flex items-center gap-1">
                        {isHome && <Home className="w-4 h-4" />}
                        {route.title}
                    </BreadcrumbPage>
                ) : route.path ? (
                    <BreadcrumbLink asChild>
                        <Link to={linkTo} className="flex items-center gap-1">
                            {isHome && <Home className="w-4 h-4" />}
                            {route.title}
                        </Link>
                    </BreadcrumbLink>
                ) : (
                    <BreadcrumbPage className="flex items-center gap-1 text-muted-foreground">
                        {route.title}
                    </BreadcrumbPage>
                )}
            </BreadcrumbItem>
        </>
    )
}

function buildBreadcrumbPath(currentPath: string): SidebarRoute[] {
    // 正規化路徑
    const normalizedPath = currentPath.startsWith('/react-js-practices/')
        ? currentPath.replace('/react-js-practices', '')
        : currentPath

    // 尋找路由
    const foundPath = findRoute(normalizedPath, routes)
    if (!foundPath) return []

    // 確保 Home 在開頭
    const homeRoute = routes.find(r => r.path === ROUTE_PATHS.HOME)
    if (foundPath[0]?.path !== ROUTE_PATHS.HOME && homeRoute) {
        return [homeRoute, ...foundPath]
    }

    return foundPath
}

function findRoute(targetPath: string, routeList: SidebarRoute[], ancestors: SidebarRoute[] = []): SidebarRoute[] | null {
    for (const route of routeList) {
        const currentPath = [...ancestors, route]

        // 找到目標路由
        if (route.path === targetPath) {
            return currentPath
        }

        // 遞迴搜尋子路由
        if (route.children) {
            const found = findRoute(targetPath, route.children, currentPath)
            if (found) return found
        }
    }

    return null
}