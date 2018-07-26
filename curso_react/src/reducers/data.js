import schema from '../schemas/index';
import schemas from '../schemas/index.js';

const initialState = {
    entities  : schemas.entities,
    categories: schemas.result.categories,
    search    : [],
}

function data(state = initialState, action) {
    switch (action.type) {

        case 'SEARCH_VIDEO': {
            let result = [];
            if (action.payload.query) {
                const categories  = state.data.categories;
                let result_author = '';

                categories.map((category) => {

                    result_author = category.playlist.filter((filter) => {
                        return ((filter.author).toLowerCase()).includes((action.payload.query).toLowerCase());
                    })

                    result = result.concat(result_author);
                });
            }

            return {
                ...state, 
                search: result,
            }
        }

        default :
            return state
    }
}

export default data;