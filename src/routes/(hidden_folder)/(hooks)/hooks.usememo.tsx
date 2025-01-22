import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import BeforeUseMemo from '@/components/demos/hooks/usememo/BeforeUseMemo'
// @ts-ignore
import UseMemo from '@/components/demos/hooks/usememo/UseMemo'

export const Route = createFileRoute('/(hidden_folder)/(hooks)/hooks/usememo')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <BeforeUseMemo></BeforeUseMemo>
            <hr className='my-8' />
            <UseMemo></UseMemo>
        </div>
    )
}
