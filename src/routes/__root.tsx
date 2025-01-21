import { AppSidebar } from '@/components/sidebars/AppSidebar'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from "@/components/ui/separator"
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'

export const Route = createRootRoute({
    component: () => (
        <>
            <AppSidebar />
            <SidebarInset className=''>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Sidebar</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Outlet />
                    <TanStackRouterDevtools />
                </div>
            </SidebarInset>
        </>
    ),
})