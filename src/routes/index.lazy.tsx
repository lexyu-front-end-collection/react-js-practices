import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='h-full p-4 flex items-center justify-center'>
      <h3 className="text-3xl text-blue-500">Welcome Home !!</h3>
    </div>
  )
}