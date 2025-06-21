import { useLocation, Link } from '@tanstack/react-router'
import { routes, type RouteConfig } from '@/config/router_config'
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

    if (isHomePage(currentPath)) {
        return renderHomeBreadcrumb()
    }

    const breadcrumbPath = buildBreadcrumbPath(currentPath)

    if (breadcrumbPath.length === 0) {
        return renderUnknownPage()
    }

    return renderBreadcrumb(breadcrumbPath)
}

// ================ 輔助函數 ================

function isHomePage(path: string): boolean {
    return path === '/react-js-practices/' || path === '/'
}

function normalizePath(path: string): string {
    return path.startsWith('/react-js-practices/')
        ? path.replace('/react-js-practices', '')
        : path
}

function buildBreadcrumbPath(currentPath: string): RouteConfig[] {
    const normalizedPath = normalizePath(currentPath)
    const foundPath = findRouteInConfig(normalizedPath)

    // 確保路徑開頭有 Home
    return ensureHomeAtStart(foundPath)
}

function findRouteInConfig(targetPath: string): RouteConfig[] {
    function search(routeList: RouteConfig[], ancestors: RouteConfig[] = []): RouteConfig[] | null {
        for (const route of routeList) {
            const currentPath = [...ancestors, route]

            if (route.path === targetPath) {
                return currentPath
            }

            if (route.children) {
                const found = search(route.children, currentPath)
                if (found) return found
            }
        }
        return null
    }

    return search(routes) || []
}

function ensureHomeAtStart(routePath: RouteConfig[]): RouteConfig[] {
    if (routePath.length === 0) return []

    const homeRoute = routes.find(r => r.path === '/react-js-practices/')
    const firstRoute = routePath[0]

    // 如果第一個不是 Home，在前面加上 Home
    if (firstRoute.path !== '/react-js-practices/' && homeRoute) {
        return [homeRoute, ...routePath]
    }

    return routePath
}

function isHomeRoute(route: RouteConfig): boolean {
    return route.path === '/react-js-practices/'
}

function hasPath(route: RouteConfig): boolean {
    return !!route.path
}

// ================ Utils ================

function renderHomeBreadcrumb() {
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

/**
 * 沒找到路由時顯示 Unknown Page
 */
function renderUnknownPage() {
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

function renderBreadcrumb(breadcrumbPath: RouteConfig[]) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbPath.flatMap((route, index) =>
                    renderBreadcrumbItem(route, index, breadcrumbPath.length)
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

function renderBreadcrumbItem(route: RouteConfig, index: number, totalLength: number) {
    const isLast = index === totalLength - 1
    const isFirst = index === 0
    const items = []

    // 添加分隔符（第一個項目除外）
    if (!isFirst) {
        items.push(<BreadcrumbSeparator key={`separator-${index}`} />)
    }

    // 添加 breadcrumb 項目
    if (isLast) {
        items.push(renderCurrentPage(route, index))
    } else if (hasPath(route)) {
        items.push(renderClickableItem(route, index))
    } else {
        items.push(renderCategoryItem(route, index))
    }

    return items
}

function renderCurrentPage(route: RouteConfig, index: number) {
    return (
        <BreadcrumbItem key={route.path || `${route.title}-${index}`}>
            <BreadcrumbPage className="flex items-center gap-1">
                {isHomeRoute(route) && <Home className="w-4 h-4" />}
                {route.title}
            </BreadcrumbPage>
        </BreadcrumbItem>
    )
}

function renderClickableItem(route: RouteConfig, index: number) {
    const linkTo = isHomeRoute(route) ? "/" : route.path!

    return (
        <BreadcrumbItem key={route.path || `${route.title}-${index}`}>
            <BreadcrumbLink asChild>
                <Link to={linkTo} className="flex items-center gap-1">
                    {isHomeRoute(route) && <Home className="w-4 h-4" />}
                    {route.title}
                </Link>
            </BreadcrumbLink>
        </BreadcrumbItem>
    )
}

function renderCategoryItem(route: RouteConfig, index: number) {
    return (
        <BreadcrumbItem key={`${route.title}-${index}`}>
            <BreadcrumbPage className="flex items-center gap-1 text-muted-foreground">
                {route.title}
            </BreadcrumbPage>
        </BreadcrumbItem>
    )
}