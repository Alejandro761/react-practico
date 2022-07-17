import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/global.scss';
import {Layout} from '../containers/Layout'
import {Login} from '../containers/Login'
import { RecoveryPassword } from "../containers/RecoveryPassword";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="recovery-password" component={RecoveryPassword} />
                    <Route component={NotFound} />
                </Layout>
            </Routes>
        </BrowserRouter>
    );
}

export {App};