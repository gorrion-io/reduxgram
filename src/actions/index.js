import axios from 'axios'

export function selectPhoto(photo) {
    return {
        type: 'SELECT_PHOTO',
        payload: photo
    }
}

export function fetchPhotos(profileName) {
    return function(dispatch) {
        axios.get(`https://instapi22.herokuapp.com/${profileName}`)
            .then(response => {
                dispatch({
                    type: 'FETCH_PHOTOS',
                    payload: response.data.items
                })
        })
    }
}