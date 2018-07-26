import schema from '../schemas/index';

function data(state = {  }, action) {
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