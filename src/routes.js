import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Spin } from 'antd'

const Home = React.lazy(() => import('@SRC/page/home'))
const Location = React.lazy(() => import('@SRC/page/location'))
const I18next = React.lazy(() => import('@SRC/page/i18next'))
const SessionStorage = React.lazy(() => import('@SRC/page/sessionStorage'))
const UseSelectorDemo = React.lazy(() => import('@SRC/page/useSelectorDemo'))
const InterfaceDemo = React.lazy(() => import('@SRC/page/interfaceDemo'))


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to='/home' />}
                ></Route>

                <Route path='/home' element={<Home />}></Route>

                <Route path='/location' element={
                    <Suspense fallback={<Spin />}>
                        <Location />
                    </Suspense>
                }>
                </Route>
                <Route path='/i18next' element={
                    <Suspense fallback={<Spin />}>
                        <I18next />
                    </Suspense>
                }>
                </Route>
                <Route path='/sessionStorage' element={
                    <Suspense fallback={<Spin />}>
                        <SessionStorage />
                    </Suspense>
                }>
                </Route>
                <Route path='/useSelector' element={
                    <Suspense fallback={<Spin />}>
                        <UseSelectorDemo />
                    </Suspense>
                }>
                </Route>
                <Route path='/interfaceDemo' element={
                    <Suspense fallback={<Spin />}>
                        <InterfaceDemo />
                    </Suspense>
                }>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
