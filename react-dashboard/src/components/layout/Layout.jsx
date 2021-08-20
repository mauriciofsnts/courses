import React, { useEffect } from 'react'
import "./layout.css"

import Topnav from "../topnav/Topnav"
import Sidebar from "../sidebar/Siderbar"
import Routes from "../Routes"

import { BrowserRouter, Route } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import ThemeActions from "../../redux/actions/ThemeActions"

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const themeClass =  localStorage.getItem('themeMode', 'theme-mode-light');
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeActions.setColor(colorClass))
        dispatch(ThemeActions.setMode(themeClass))

    }, [dispatch])

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props} />

                    <div className="layout__content">

                        <Topnav/>

                        <div className="layout__content-main">
                            <Routes />
                        </div>

                    </div>
                </div>
            )} />
        </BrowserRouter>
    )
}

export default Layout
