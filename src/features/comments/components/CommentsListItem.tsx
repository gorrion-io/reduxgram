import React, { StatelessComponent } from "react";

import { CommentData } from "@src/features/comments/CommentData";

export const CommentsListItem: StatelessComponent<{ comment: CommentData }> = ({ comment }) => (
    <li className="list-group-item">
        <strong>{comment.username}</strong>
        &nbsp;
        {comment.text}
    </li>
);
