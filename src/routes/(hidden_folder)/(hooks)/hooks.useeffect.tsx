import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseEffectAPI from '@/components/demos/hooks/useeffect/_1/UseEffectAPI'
// @ts-ignore
import UseEffectDemo from '@/components/demos/hooks/useeffect/_2/UseEffectDemo'
// @ts-ignore
import UseEffectWindowEvent from '@/components/demos/hooks/useeffect/_3/UseEffectWindowEvent'


export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/useeffect',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <UseEffectWindowEvent />
      <hr className='my-8'/>
      <UseEffectDemo />
      <hr className='my-8'/>
      <UseEffectAPI />
    </>
  )
}
