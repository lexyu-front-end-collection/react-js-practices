import { RouterProvider, createRouter } from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './App.css'

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <div>Gloabal Not Found Here!</div>,
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
