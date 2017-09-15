import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { selectPhoto } from '../actions/index'

const PhotoList = (props) => {
    const mappedPhotos = props.photos.map(photo => {
        return (
            <img className="col-md-4" key={photo.id} 
                onClick={() => props.selectPhoto(photo)}
                src={photo.images.thumbnail.url} />
        )
    })

    return (
        <div className="col-md-4">
            {mappedPhotos}
        </div>
    )
}

function mapStateToProps(state) {
    return { photos: state.photos }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectPhoto: selectPhoto }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)