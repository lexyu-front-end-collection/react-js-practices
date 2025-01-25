import { ThemeProvider } from "@/components/mode/ThemeProvider"
import { RouterProvider, createRouter } from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './App.css'
import { SidebarProvider } from "./components/ui/sidebar"

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <div>Gloabal Not Found Here!</div>,
  basepath: "/react-js-practices/",
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </SidebarProvider>
      </ThemeProvider>
    </>
  )
}

export default App
