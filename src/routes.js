import React, { Suspense } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Spin } from 'antd'

const Home = React.lazy(() => import('./page/home'))
const Location = React.lazy(() => import('./page/location'))
const I18next = React.lazy(() => import('./page/i18next'))


export default function Router() {
    return (
        <HashRouter>
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
            </Routes>
        </HashRouter>
    )
}
