import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Spin } from 'antd'

const Home = React.lazy(() => import('./page/home'))
const Location = React.lazy(() => import('./page/location'))
const I18next = React.lazy(() => import('./page/i18next'))
const SessionStorage = React.lazy(() => import('./page/sessionStorage'))
const UseSelectorDemo = React.lazy(() => import('./page/UseSelectorDemo'))


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
            </Routes>
        </BrowserRouter>
    )
}
