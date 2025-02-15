import { RouteConfig, routes } from '@/config/router_config'
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
} from '@/components/ui/sidebar';
import { Link } from '@tanstack/react-router';
import { Toggle } from '@/components/mode/Toggle';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ChevronRight } from 'lucide-react';

export function AppSidebar() {
    const renderMenuItem = (route: RouteConfig) => {
        if (!route.children) {
            return (
                <SidebarMenuItem key={route.path}>
                    <SidebarMenuButton size="lg" asChild tooltip={route.title}>
                        <Link to={route.path} className="flex items-center w-full">
                            {route.icon && <route.icon className="mr-2 w-4 h-4" />}
                            {route.title}
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            );
        }

        return (
            <Collapsible key={route.title} asChild className="group/collapsible">
                <SidebarMenuItem >
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton size="lg">
                            {route.icon && <route.icon className="mr-2 w-4 h-4" />}
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
        );
    };

    return (
        <Sidebar className='h-full'>
            <SidebarHeader>
                <p className="text-xl">React All Practices</p>
            </SidebarHeader>
            <SidebarContent className='overflow-y-auto'>
                <SidebarGroup className=''>
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