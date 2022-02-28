import React from 'react';
import {Layout} from "antd";
import {Navbar, AppRouter, Footer} from "./components";
import './App.css'


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <AppRouter/>
                </Layout>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default App;