import { AppSidebar } from '@/components/sidebars/AppSidebar'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from "@/components/ui/separator"
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

export const Route = createRootRoute({
    component: () => (
        <>
            <AppSidebar />
            <SidebarInset className=''>
                <header className="flex gap-2 items-center h-16 border-b shrink-0">
                    <div className="flex gap-2 items-center px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Breadcrumb (Not Implementation)</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-col flex-1 gap-4 p-4 pt-0 mt-4">
                    <Outlet />
                    <TanStackRouterDevtools />
                </div>
            </SidebarInset>
        </>
    ),
})