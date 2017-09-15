export default function (state = null, action) {
    switch (action.type) {
        case 'SELECT_PHOTO':
            return action.payload
        case 'FETCH_PHOTOS':
            return action.payload[0]
    }

    return state
}