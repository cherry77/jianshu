import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './common/header'
import {GlobalStyle} from "./style";
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <div>
        <GlobalStyle />
        <Provider store={store}>
            <Header/>
            <BrowserRouter>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail" exact component={Detail}></Route>
            </BrowserRouter>
        </Provider>

    </div>
  );
}

export default App;
