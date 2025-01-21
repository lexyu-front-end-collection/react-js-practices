import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import Counter from '@/components/demos/hooks/usestate/_1/Counter'
// @ts-ignore
import Counter2 from '@/components/demos/hooks/usestate/_1/Counter2'
// @ts-ignore
import UpdateObjects from '@/components/demos/hooks/usestate/_2/UpdateObjects'
// @ts-ignore
import UseStateDemo from '@/components/demos/hooks/usestate/_3/UseStateDemo'

export const Route = createFileRoute('/(hidden_folder)/(hooks)/hooks/usestate')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return (
    <>
      <Counter />
      <hr className='my-8'/>
      <Counter2 />
      <hr className='my-8'/>
      <UpdateObjects />
      <hr className='my-8'/>
      <UseStateDemo />
    </>
  )
}
