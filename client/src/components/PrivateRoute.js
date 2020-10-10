import React from 'react';
import BubblePage from './BubblePage';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, ...props}) => {

    const Authenticated = () => {
        return localStorage.getItem('token') !== null;
    };

    return (
        <div>
            <Route {...props} render={() => {
                if(Authenticated()) {
                    return(
                        <BubblePage />
                    )
                } else {
                    return <Redirect to='/' />
                }
            }} />
        </div>
    )
}

export default PrivateRoute;