import { AppSidebar } from '@/components/sidebars/AppSidebar'

import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from "@/components/ui/separator"
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SimpleBreadcrumb } from '@/components/breadcrumb/Breadcrumb'

export const Route = createRootRoute({
    component: () => (
        <>
            <AppSidebar />
            <SidebarInset className=''>
                <header className="flex items-center h-16 gap-2 border-b shrink-0">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="h-4 mr-2" />
                        <SimpleBreadcrumb />
                    </div>
                </header>
                <div className="flex flex-col flex-1 gap-4 p-4 pt-0 mt-4">
                    <Outlet />
                    <TanStackRouterDevtools />
                </div>
                <p className="mb-2 text-center">&copy; {new Date().getFullYear()} TLexYuW </p>
            </SidebarInset>
        </>
    ),
})