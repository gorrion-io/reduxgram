import React, { Component } from 'react'

const CommentsListItem = (props) => {
    const comment = props.comment
    return (
        <li className="list-group-item">
            <strong>{comment.from.username}</strong>&nbsp;
            {comment.text}
        </li>
    )
}

export default CommentsListItem