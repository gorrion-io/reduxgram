import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsList from '../components/comments-list'

const Photo = (props) => {
    if(!props.photo)
    return <span>Loading...</span>

    const photo = props.photo

    return (
        <div className="col-md-8 text-center">
            <a target='_blank' href={photo.link}>
                <img src={photo.images.standard_resolution.url} />
            </a>
            <h4>Comments:</h4>
            <CommentsList comments={photo.comments.data} />
        </div>
    )
}

function mapStateToProps(state) {
    return { photo: state.selectedPhoto }
}

export default connect(mapStateToProps)(Photo)