import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Cryptocurrencies, CryptoDetails, Exchanges, HomePage, News} from "./index";

const AppRouter = () => {
    return (
        <div className="routes">
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/exchanges" element={ <Exchanges/>}/>
                <Route exact path="/cryptocurrencies" element={ <Cryptocurrencies/>}/>
                <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
                <Route exact path="/news" element={<News/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;