import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Main } from "./components/main";
import './styles/styles.scss';


const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));