import React from "react";
import LayoutHeader from "../components/layout/layout_header";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
    return (
        <div>
            <LayoutHeader></LayoutHeader>
            <main>
                <Outlet />
            </main>
            <footer>Copyright ㊢</footer>
        </div>
    );
};

export default LayoutPage;
