import React from 'react';
import {Provider} from 'react-redux';
import initStore from 'store';

export default ({ children, initialState = {} }) => {
    return(
        <Provider store={initStore(initialState)}>
            {children}
        </Provider> 
    );
};