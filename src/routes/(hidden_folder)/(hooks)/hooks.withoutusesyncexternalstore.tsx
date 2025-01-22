import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import BeforeUseSyncExternalStore from '@/components/demos/hooks/usesyncexternalstore/BeforeUseSyncExternalStore'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/withoutusesyncexternalstore',
)({
  component: BeforeUseSyncExternalStore,
})

