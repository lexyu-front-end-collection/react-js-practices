import { createFileRoute } from '@tanstack/react-router'

// @ts-ignore
import UseSyncExternalStore from '@/components/demos/hooks/usesyncexternalstore/UseSyncExternalStore'

export const Route = createFileRoute(
    '/(hidden_folder)/(hooks)/hooks/usesyncexternalstore',
)({
    component: UseSyncExternalStore,
})

