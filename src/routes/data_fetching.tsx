import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
// @ts-ignore
import DataFetchOwnHandle from '@/components/demos/data_fetching/DataFetchingOwnHandle.jsx'
// @ts-ignore
import ReactQueryDataFecthDemo from '@/components/demos/data_fetching/ReactQueryDataFetchDemo.jsx'

export const Route = createFileRoute('/data_fetching')({
    component: DataFetchingLayout,
})

function DataFetchingLayout() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 p-4 border-r">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/data_fetching/own-handle"
                            className="block px-4 py-2 rounded hover:bg-gray-200 hover:font-extrabold"
                        >
                            Data Fetch Own Handle
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/data_fetching/react-query"
                            className="block px-4 py-2 rounded hover:bg-gray-200 hover:font-extrabold"
                        >
                            React Query Data Fetch Demo
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    )
}
