import React from "react";
import CustomHeader from "../CustomHeader";
import { Outlet } from "react-router-dom";


const MainLayout = () => {

    return (
        <div className="wrapper">
            <CustomHeader/>
            <div className="main row">
                <div className="main__wrapper">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default MainLayout