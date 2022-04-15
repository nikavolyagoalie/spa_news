import React from "react";
import { Layout } from "antd";
import CustomHeader from "../CustomHeader";
import { Outlet } from "react-router-dom";

const { Content } = Layout

const MainLayout = () => {

    return (
        <Layout className="wrapper">
            <CustomHeader/>
            <Content>
                <Outlet/>
            </Content>
        </Layout>
    )
}

export default MainLayout