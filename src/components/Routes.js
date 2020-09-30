import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Header from './Header';

const routes = (props) => {
    const { addItems, numInCart } = props;

    return (
        <BrowserRouter>
            <Header 
                numInCart={numInCart}/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route 
                    exact 
                    path='/shop' 
                    render={(props) => <Shop
                                            {...props}
                                            addItems={addItems} 
                                        />}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default routes;