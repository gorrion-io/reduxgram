import React, { Component } from 'react'

import CommentsListItem from './comments-list-item'

const CommentsList = (props) => {
    const comments = props.comments.map(c => <CommentsListItem comment={c} key={c.id} />)
    return (
        <ul className="list-group">
            {comments}
        </ul>
    )
}

export default CommentsList