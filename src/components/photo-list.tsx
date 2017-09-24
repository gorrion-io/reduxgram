import React, { StatelessComponent } from "react";
import { Photo } from "@src/interfaces/data";

interface Props {
    photos: Photo[];
    onPhotoClicked(photo: Photo): any;
}
export const PhotoList: StatelessComponent<Props> = ({ photos = [], onPhotoClicked }) => {
    const photosElements = photos.map(photo => (
        <img
            className="col-md-4"
            key={photo.id}
            onClick={() => onPhotoClicked(photo)}
            src={photo.images.thumbnail}
        />
    ));
    return (
        <div className="col-md-4">
            {photosElements}
        </div>
    );
};
