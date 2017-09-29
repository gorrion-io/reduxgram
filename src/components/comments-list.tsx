import React, { StatelessComponent } from "react";

import { CommentsListItem } from "@src/components/comments-list-item";
import { Comment } from "@src/interfaces/data";

export const CommentsList: StatelessComponent<{ comments: Comment[] }> = ({ comments }) => (
    <ul className="list-group">
        {comments.map(c => <CommentsListItem comment={c} key={c.id} />)}
    </ul>
);
