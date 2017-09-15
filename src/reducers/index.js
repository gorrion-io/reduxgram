import {combineReducers} from 'redux'

import SelectedPhotoReducer from './selected-photo-reducer'
import PhotosReducer from './photos-reducer'

const rootReducer = combineReducers({
    photos: PhotosReducer,
    selectedPhoto: SelectedPhotoReducer
})

export default rootReducer