import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import BurgerBuilder from './store/reducer/Burgerbuilder';
import OrderFetching from './store/reducer/OrderFetching';
import Auth from './store/reducer/Auth';
import {Provider} from 'react-redux';



 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const RootReducer = combineReducers({builder:BurgerBuilder,Order :OrderFetching,control:Auth});
 const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk) ));

 const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
