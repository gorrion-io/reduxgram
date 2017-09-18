import React, { StatelessComponent } from "react";
import { CommentsList } from "components/comments-list";
import { Photo as PhotoData } from "interfaces/data";

export const Photo: StatelessComponent<{ photo: PhotoData }> = ({ photo }) => {
    if (!photo) {
        return <span>Loading photos...</span>;
    } else {
        return (
            <div className="col-md-8 text-center">
                <a target="_blank" href={photo.link}>
                    <img src={photo.images.standard} />
                </a>
                <h4>Comments:</h4>
                <CommentsList comments={photo.comments} />
            </div>
        );
    }
};
