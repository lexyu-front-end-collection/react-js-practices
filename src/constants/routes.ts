import type { LucideIcon } from 'lucide-react'

export type SidebarRoute = {
    title: string
    path?: string
    icon?: LucideIcon
    children?: Omit<SidebarRoute, 'children'>[]
}

export const ROUTE_PATHS = {
    HOME: "/react-js-practices/",

    // Basic
    BASIC_LIST_DATA: "/basic/list-of-data",
    BASIC_PROPS_CHILDREN: "/basic/props-children",
    BASIC_CONDITIONAL_RENDERING: "/basic/conditional-rendering",
    BASIC_PORTAL: "/basic/portal",

    // Data Fetching
    DATA_FETCH_OWN: "/data-fetching/own-handle",
    DATA_FETCH_REACT_QUERY: "/data-fetching/react-query",

    // Hooks
    HOOKS_BEFORE_USECALLBACK: "/hooks/before-usecallback",
    HOOKS_USECALLBACK: "/hooks/usecallback",
    HOOKS_USESTATE: "/hooks/usestate",
    HOOKS_USEEFFECT: "/hooks/useeffect",
    HOOKS_USEMEMO: "/hooks/usememo",
    HOOKS_USEID: "/hooks/useid",
    HOOKS_USEREF: "/hooks/useref",
    HOOKS_USEREDUCER: "/hooks/usereducer",
    HOOKS_USECONTEXT: "/hooks/usecontext",
    HOOKS_USEDEFERREDVALUE: "/hooks/usedeferredvalue",
    HOOKS_USETRANSITION: "/hooks/usetransition",
    HOOKS_USEIMPERATIVEHANDLE: "/hooks/useimperativehandle",
    HOOKS_USEINSERTIONEFFECT: "/hooks/useinsertioneffect",
    HOOKS_USELAYOUTEFFECT: "/hooks/uselayouteffect",
    HOOKS_WITHOUT_USESYNCEXTERNALSTORE: "/hooks/withoutusesyncexternalstore",
    HOOKS_USESYNCEXTERNALSTORE: "/hooks/usesyncexternalstore",

    // Custom Hooks  
    CUSTOM_INTERVAL_PROBLEM_1: "/hooks/interval-problem-1",
    CUSTOM_INTERVAL_PROBLEM_2: "/hooks/interval-problem-2",
    CUSTOM_USEINTERVAL: "/hooks/useinterval",
    CUSTOM_USEDEBOUNCE: "/hooks/usedebounce",
    CUSTOM_USETHROTTLE: "/hooks/usethrottle",

    // Motion
    MOTION_BASIC: "/m/01",
    MOTION_TRANSFORMATIONS: "/mt/01",
    MOTION_GESTURES: "/mg/01",

    // Motion Hooks
    MOTION_HOOKS_ROTATE: "/mh/01",
    MOTION_HOOKS_TRANSITION: "/mh/02",

    // D3.js
    D3_BACKLOG: "/backlog2",

    // Three.js 
    THREE_BACKLOG: "/backlog3",

    // Libraries
    LIBS_DND: "/libs/dnd",
    LIBS_CVA_TWMERGE: "/libs/cva-twmerge",
    LIBS_ZUSTAND: "/libs/zustand",

    // Demos
    DEMOS_VERIFY_EMAIL: "/demos/verify-page",
    DEMOS_VERIFY_RESULT: "/demos/result-page",
    DEMOS_MARKDOWN: "/demos/markdown",
    DEMOS_COPYWRITING: "/demos/copywriting/render",
    DEMOS_TOAST: "/demos/toast",
    DEMOS_EDITORJS: "/demos/editorjs",

    // Toys
    TOYS_TODO: "/toys/todo-app",
    TOYS_STOPWATCH: "/toys/stopwatch",
    TOYS_CLOCK: "/toys/clock",
    TOYS_COLOR_PICKER: "/toys/color-picker",
} as const

export const routes: SidebarRoute[] = [
    {
        title: "Home",
        path: ROUTE_PATHS.HOME,
    },
    {
        title: "Basic",
        children: [
            { title: "List of Data", path: ROUTE_PATHS.BASIC_LIST_DATA },
            { title: "Props Children", path: ROUTE_PATHS.BASIC_PROPS_CHILDREN },
            { title: "Conditional Rendering", path: ROUTE_PATHS.BASIC_CONDITIONAL_RENDERING },
            { title: "Portal", path: ROUTE_PATHS.BASIC_PORTAL },
        ]
    },
    {
        title: "Data Fetching",
        children: [
            { title: "Data Fetch Own Handle", path: ROUTE_PATHS.DATA_FETCH_OWN },
            { title: "React Query Data Fetch", path: ROUTE_PATHS.DATA_FETCH_REACT_QUERY }
        ]
    },
    {
        title: "Hooks",
        children: [
            { title: "Before useCallback (Only useState)", path: ROUTE_PATHS.HOOKS_BEFORE_USECALLBACK },
            { title: "useCallback", path: ROUTE_PATHS.HOOKS_USECALLBACK },
            { title: "useState", path: ROUTE_PATHS.HOOKS_USESTATE },
            { title: "useEffect", path: ROUTE_PATHS.HOOKS_USEEFFECT },
            { title: "useMemo", path: ROUTE_PATHS.HOOKS_USEMEMO },
            { title: "useId", path: ROUTE_PATHS.HOOKS_USEID },
            { title: "useRef", path: ROUTE_PATHS.HOOKS_USEREF },
            { title: "useReducer", path: ROUTE_PATHS.HOOKS_USEREDUCER },
            { title: "useContext", path: ROUTE_PATHS.HOOKS_USECONTEXT },
            { title: "useDeferredValue", path: ROUTE_PATHS.HOOKS_USEDEFERREDVALUE },
            { title: "useTransition", path: ROUTE_PATHS.HOOKS_USETRANSITION },
            { title: "useImperativeHandle", path: ROUTE_PATHS.HOOKS_USEIMPERATIVEHANDLE },
            { title: "useInsertionEffect", path: ROUTE_PATHS.HOOKS_USEINSERTIONEFFECT },
            { title: "useLayoutEffect", path: ROUTE_PATHS.HOOKS_USELAYOUTEFFECT },
            { title: "Before useSyncExternalStore", path: ROUTE_PATHS.HOOKS_WITHOUT_USESYNCEXTERNALSTORE },
            { title: "useSyncExternalStore + useEffect", path: ROUTE_PATHS.HOOKS_USESYNCEXTERNALSTORE },
        ]
    },
    {
        title: "Custom Hooks",
        children: [
            { title: "Interval Problem 1", path: ROUTE_PATHS.CUSTOM_INTERVAL_PROBLEM_1 },
            { title: "Interval Problem 2", path: ROUTE_PATHS.CUSTOM_INTERVAL_PROBLEM_2 },
            { title: "useInterval", path: ROUTE_PATHS.CUSTOM_USEINTERVAL },
            { title: "useDebounce", path: ROUTE_PATHS.CUSTOM_USEDEBOUNCE },
            { title: "useThrottle", path: ROUTE_PATHS.CUSTOM_USETHROTTLE },
        ]
    },
    {
        title: "Motion",
        children: [
            { title: "01 - Basic", path: ROUTE_PATHS.MOTION_BASIC },
            { title: "02 - Transformations", path: ROUTE_PATHS.MOTION_TRANSFORMATIONS },
            { title: "03 - Gestures - 01", path: ROUTE_PATHS.MOTION_GESTURES },
        ]
    },
    {
        title: "Motion - Hooks",
        children: [
            { title: "Rotate", path: ROUTE_PATHS.MOTION_HOOKS_ROTATE },
            { title: "Transition", path: ROUTE_PATHS.MOTION_HOOKS_TRANSITION }
        ]
    },
    {
        title: "D3.js",
        children: [
            { title: "Backlog 2", path: ROUTE_PATHS.D3_BACKLOG }
        ]
    },
    {
        title: "Three.js",
        children: [
            { title: "Backlog 3", path: ROUTE_PATHS.THREE_BACKLOG }
        ]
    },
    {
        title: "Libraries",
        children: [
            { title: "DnD", path: ROUTE_PATHS.LIBS_DND },
            { title: "cva && twMerge", path: ROUTE_PATHS.LIBS_CVA_TWMERGE },
            { title: "zustand", path: ROUTE_PATHS.LIBS_ZUSTAND }
        ]
    },
    {
        title: "Demos",
        children: [
            { title: "Verify Email Page", path: ROUTE_PATHS.DEMOS_VERIFY_EMAIL },
            { title: "Verify Result Page", path: ROUTE_PATHS.DEMOS_VERIFY_RESULT },
            { title: "Markdown", path: ROUTE_PATHS.DEMOS_MARKDOWN },
            { title: "Copywriting Render HTML", path: ROUTE_PATHS.DEMOS_COPYWRITING },
            { title: "Toast UI Editor", path: ROUTE_PATHS.DEMOS_TOAST },
            { title: "Editor JS", path: ROUTE_PATHS.DEMOS_EDITORJS },
        ]
    },
    {
        title: "Toys",
        children: [
            { title: "TODO App", path: ROUTE_PATHS.TOYS_TODO },
            { title: "Stopwatch", path: ROUTE_PATHS.TOYS_STOPWATCH },
            { title: "Clock", path: ROUTE_PATHS.TOYS_CLOCK },
            { title: "Color Picker", path: ROUTE_PATHS.TOYS_COLOR_PICKER }
        ]
    },
]