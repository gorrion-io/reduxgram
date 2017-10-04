import React, { StatelessComponent } from "react";

import { CommentsListItem } from "@src/features/comments/CommentsListItem.component";
import { CommentData } from "@src/features/comments/comment-data.interface";

export const CommentsList: StatelessComponent<{ comments: CommentData[] }> = ({ comments }) => (
    <ul className="list-group">
        {comments.map(c => <CommentsListItem comment={c} key={c.id} />)}
    </ul>
);
