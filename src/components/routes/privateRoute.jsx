import React, { useContext, useEffect } from 'react'
import { Route, Redirect} from 'react-router-dom';
import authContext from '../../context//auth/authContext';

const PrivateRoute = ({component: Component, ...props}) => {
    
    const authState = useContext(authContext);
    const { authenticated, loading, getUser } = authState;

    useEffect(() => {
        getUser();
    // eslint-disable-next-line
    }, []);

    return ( 
        <Route 
            {...props}  
            render={ props => !authenticated && !loading ? (
                <Redirect to="/" />
            ) :(
                <Component {...props} />
            ) }
        />

        
    );
}

export default PrivateRoute;