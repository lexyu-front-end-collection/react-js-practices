import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="flex gap-4 p-2">
                <ul>
                    <li>
                        <Link to="/" className="[&.active]:font-bold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/data_fetching' className="[&.active]:font-bold">
                            Data Fetching
                        </Link>
                    </li>
                </ul>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})