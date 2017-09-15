export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_PHOTOS':
            return action.payload
    }

    return state
}