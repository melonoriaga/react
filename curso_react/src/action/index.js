import * as actions from '../actionTypes/index'; 

export function openModal (mediaId) {
    return {
        type: actions.OPEN_MODAL,
        payload: {
            mediaId
        }
    }
}

export function closeModal () {
    return {
        type: actions.CLOSE_MODAL,
    }
}

export function searchEntities (query) {
    return {
        type: actions.SEARCH_ENTITIES,
        payload: {
            query,
        }
    }
}