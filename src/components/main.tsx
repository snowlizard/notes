import * as React from "react";
import { SideBar } from "./sideBar";
import { MyEditor } from "./editor";

export const Main = () => {
    return (
        <div id="main">
            <SideBar />
            <MyEditor />
        </div>
    );
}
