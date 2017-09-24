import React, { StatelessComponent } from "react";

import { Comment } from "@src/interfaces/data";

export const CommentsListItem: StatelessComponent<{ comment: Comment }> = ({ comment }) => (
    <li className="list-group-item">
        <strong>{comment.username}</strong>
        &nbsp;
        {comment.text}
    </li>
);
