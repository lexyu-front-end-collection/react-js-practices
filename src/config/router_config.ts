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
        title: "Basic",
        children: [
            {
                title: "List of Data",
                path: "/basic/list-of-data",
            },
            {
                title: "Props Children",
                path: "/basic/props-children",
            },
            {
                title: "Conditional Rendering",
                path: "/basic/conditional-rendering",
            },
            {
                title: "Portal",
                path: "/basic/portal",
            },
        ]
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
                title: "useRef",
                path: "/hooks/useref",
            },
            {
                title: "useReducer",
                path: "/hooks/usereducer",
            },
            {
                title: "useContext",
                path: "/hooks/usecontext",
            },
            {
                title: "useDeferredValue",
                path: "/hooks/usedeferredvalue",
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
                path: "/hooks/withoutusesyncexternalstore",
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
            {
                title: "useDebounce",
                path: "/hooks/usedebounce",
            },
            {
                title: "useThrottle",
                path: "/hooks/usethrottle",
            },
        ]
    },
    {
        title: "Framer Motion",
        children: [
            {
                title: "Backlog",
                path: "/backlog",
            }
        ]
    },
    {
        title: "D3.js",
        children: [
            {
                title: "Backlog 2",
                path: "/backlog2",
            }
        ]
    },
    {
        title: "Three.js",
        children: [
            {
                title: "Backlog 3",
                path: "/backlog3",
            }
        ]
    },
    {
        title: "Libraries",
        children: [
            {
                title: "DnD",
                path: "/libs/dnd",
            },
            {
                title: "cva && twMerge",
                path: "/libs/cva-twmerge",
            },
            {
                title: "zustand",
                path: "/libs/zustand",
            }
        ]
    },
    {
        title: "Toys",
        children: [
            {
                title: "TODO App",
                path: "/toys/todo-app",
            },
            {
                title: "Stopwatch",
                path: "/toys/stopwatch",
            },
            {
                title: "Clock",
                path: "/toys/clock",
            },
            {
                title: "Cloor Picker",
                path: "/toys/color-picker",
            }
        ]
    },
]
