export type RouteConfig = {
    title: string
    path?: string
    icon?: React.ComponentType<{ className?: string }>
    children?: Omit<RouteConfig, 'children'>[]
}

export const routes: RouteConfig[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Data Fetching",
        children: [
            {
                title: "Data Fetch Own Handle",
                path: "/data-fetching/own-handle",
            },
            {
                title: "React Query Data Fecth",
                path: "/data-fetching/react-query",
            }
        ]
    },
    {
        title: "Hooks",
        children: [
            {
                title: "Before useCallback (Only useState)",
                path: "/hooks/before-usecallback",
            },
            {
                title: "useCallback",
                path: "/hooks/usecallback",
            },
            {
                title: "useState",
                path: "/hooks/usestate",
            },
            {
                title: "useEffect",
                path: "/hooks/useeffect",
            },
            {
                title: "useMemo",
                path: "/hooks/usememo",
            },
            {
                title: "useId",
                path: "/hooks/useid",
            },
            {
                title: "useReducer",
                path: "/hooks/usereducer",
            },
            {
                title: "useRef",
                path: "/hooks/useref",
            },
            {
                title: "useTransition",
                path: "/hooks/usetransition",
            },
            {
                title: "useImperativeHandle",
                path: "/hooks/useimperativehandle",
            },
            {
                title: "useInsertionEffect",
                path: "/hooks/useinsertioneffect",
            },
            {
                title: "useLayoutEffect",
                path: "/hooks/uselayouteffect",
            },
            {
                title: "Before useSyncExternalStore (useState + useEffect)",
                path: "/hooks/beforeusesyncexternalstore",
            },
            {
                title: "useSyncExternalStore + useEffect",
                path: "/hooks/usesyncexternalstore",
            },
        ]
    },
    {
        title: "Custom Hooks",
        children: [
            {
                title: "Interval Problem 1",
                path: "/hooks/interval-problem-1",
            },
            {
                title: "Interval Problem 2",
                path: "/hooks/interval-problem-2",
            },
            {
                title: "useInterval",
                path: "/hooks/useinterval",
            },
        ]
    },
    {
        title: "Toys",
        children: [
            {
                title: "TODOs",
                path: "/toys/todos",
            }
        ]
    },
]
