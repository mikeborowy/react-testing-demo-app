import tv4 from 'tv4';
import stateSchema from 'common/stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);
    if(!tv4.validate(getState(), stateSchema)){
        console.error('Invalid state schema detected');
    };
};