import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SideBar } from "./components/sideBar";
import './styles/styles.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <SideBar/>
            </div>
        </Provider>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));