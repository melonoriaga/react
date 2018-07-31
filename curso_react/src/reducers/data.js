import { fromJS } from 'immutable';
import schemas from '../schemas/index'; 
import { SEARCH_ENTITIES } from '../actionTypes/index';

const initialState = fromJS({
    entities  : schemas.entities,
    categories: schemas.result.categories,
    search    : '',
})

function data(state = initialState, action) {
    switch (action.type) {

        case SEARCH_ENTITIES: {
            return state.set('search', action.payload.query)
        }

        default :
            return state
    }
}

export default data;