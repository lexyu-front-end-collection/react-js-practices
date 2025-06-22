import { SidebarRoute, routes } from '@/constants/routes'
import {
    Sidebar,
    SidebarMenu,
    SidebarMenuItem,
    SidebarHeader,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarFooter,
    SidebarRail,
    SidebarMenuButton,
    SidebarContent,
} from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'
import { Toggle } from '@/components/mode/Toggle'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { ChevronRight } from 'lucide-react'

export function AppSidebar() {
    return (
        <Sidebar className='h-full'>
            <SidebarHeader>
                <p className="text-xl">React All Practices</p>
            </SidebarHeader>

            <SidebarContent className='overflow-y-auto'>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarMenu>
                        {routes.map(renderMenuItem)}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <Toggle />
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}

function renderMenuItem(route: SidebarRoute) {
    // 單一路由項目
    if (!route.children) {
        return (
            <SidebarMenuItem key={route.path}>
                <SidebarMenuButton size="lg" asChild tooltip={route.title}>
                    <Link to={route.path!} className="flex items-center w-full">
                        {route.icon && <route.icon className="w-4 h-4 mr-2" />}
                        {route.title}
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        )
    }

    // 有子項目的分類
    return (
        <Collapsible key={route.title} asChild className="group/collapsible">
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton size="lg">
                        {route.icon && <route.icon className="w-4 h-4 mr-2" />}
                        <span>{route.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <ul className="ml-4">
                        {route.children.map(renderMenuItem)}
                    </ul>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    )
}