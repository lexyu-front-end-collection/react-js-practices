import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import BeforeUseContext from '@/components/demos/hooks/usecontext/_1/BeforeUseContext'
// @ts-ignore
import CtxA from '@/components/demos/hooks/usecontext/_2/CtxA'
// @ts-ignore
import ContextDemo from '@/components/demos/hooks/usecontext/_3/ContextDemo'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/usecontext',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <BeforeUseContext></BeforeUseContext>
        <hr className='my-8' />
        <CtxA></CtxA>
        <hr className='my-8' />
        <ContextDemo></ContextDemo>
    </div>
  )
}
