import { useRoutes } from 'react-router'

import Layout from '@/layout/Layout'
import Home from '@/views/Home/Home'
import ListPage from '@/views/ListPage/ListPage'
// import DetailPage from '@/views/DetailPage/DetailPage'
// import Login from '@/views/Login/Login'
import ErrorPage from '@/views/ErrorPage/ErrorPage'
import { lazy } from 'react'

const DetailPage = lazy(() => import('@/views/DetailPage/DetailPage'))
const Login = lazy(() => import('@/views/Login/Login'))

const routerRootPath = import.meta.env.DSZ_ROUTER_BASE || '/'
console.log("🚀 ~ file: index.tsx:15 ~ routerRootPath:", routerRootPath)
const routesConfig = [
    {
        path: routerRootPath,
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'list/:category', element: <ListPage /> },
            { path: 'detail', element: <DetailPage /> },
            { path: 'login', element: <Login /> },
            { path: '*', element: <ErrorPage /> }
        ]
    },
]


function RouteList() {
    const element = useRoutes(routesConfig)
    return element
}


export default RouteList