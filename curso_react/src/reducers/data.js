import { fromJS } from 'immutable';
import schemas from '../schemas/index';

const initialState = fromJS({
    entities  : schemas.entities,
    categories: schemas.result.categories,
    search    : '',
})

function data(state = initialState, action) {
    switch (action.type) {

        case 'SEARCH_VIDEO': {
            return state.set('search', action.payload.query)
        }

        default :
            return state
    }
}

export default data;