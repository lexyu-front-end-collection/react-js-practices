import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import BeforeUseReducer from '@/components/demos/hooks/usereducer/BeforeUseReducer'
// @ts-ignore
import UseReducer from '@/components/demos/hooks/usereducer/UseReducer'

export const Route = createFileRoute(
    '/(hidden_folder)/(hooks)/hooks/usereducer',
)({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <BeforeUseReducer></BeforeUseReducer>
            <hr className='my-8' />
            <UseReducer></UseReducer>
        </div>
    )
}
