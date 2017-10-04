import React, { StatelessComponent } from "react";

import { CommentData } from "@src/features/comments/comment-data.interface";

export const CommentsListItem: StatelessComponent<{ comment: CommentData }> = ({ comment }) => (
    <li className="list-group-item">
        <strong>{comment.username}</strong>
        &nbsp;
        {comment.text}
    </li>
);
