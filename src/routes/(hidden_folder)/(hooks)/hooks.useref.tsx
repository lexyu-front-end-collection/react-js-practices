import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseRefDemo from '@/components/demos/hooks/useref/UseRefDemo'
// @ts-ignore
import UseRefDemo2 from '@/components/demos/hooks/useref/UseRefDemo2'


export const Route = createFileRoute('/(hidden_folder)/(hooks)/hooks/useref')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <UseRefDemo />
      <hr className='my-8'/>
      <UseRefDemo2 />
    </div>
  )
}
