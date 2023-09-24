import { Routes, Route } from 'react-router'

import Home from '@/views/Home/Home'
import ListPage from '@/views/ListPage/ListPage'
import DetailPage from '@/views/DetailPage/DetailPage'
import Login from '@/views/Login/Login'


function RouteList() {
    return (
        <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<ListPage />} path="/list"></Route>
            <Route element={<DetailPage />} path="/detail"></Route>
            <Route element={<Login />} path="/login"></Route>
        </Routes>
    )
}


export default RouteList