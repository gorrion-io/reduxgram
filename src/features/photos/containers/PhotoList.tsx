import React, { Component } from "react";
import { connect } from "react-redux";
import { match as matchType, withRouter } from "react-router";
import { Link } from "react-router-dom";

import { PhotoData } from "@src/features/photos/PhotoData";
import { fetchPhotos } from "@src/features/photos/redux/action-creators";
import { RootState } from "@src/redux/root-state";

interface Props {
    match: matchType<{profileName: string}>;
    photos: PhotoData[];
    profileName: string;
    fetchPhotos: typeof fetchPhotos;
}
export class PhotoList extends Component<Props> {

    componentDidMount() {
        if (this.props.photos.length === 0) {
            this.loadData();
        }
    }

    render() {
        const { photos, match } = this.props;

        if (photos.length === 0) {
            return (
                <div>
                    <h1>Loading profile photos</h1>
                    <span>{this.props.match.params.profileName}</span>
                </div>
            );
        } else {
            const photosElements = photos.map(photo => (
                <Link
                    to={`${match.url}/${photo.id}`}
                    key={photo.id}
                >
                    <img src={photo.images.thumbnail} />
                </Link>
            ));

            return (
                <div>
                    {photosElements}
                </div>
            );
        }
    }

    private loadData() {
        this.props.fetchPhotos(this.props.match.params.profileName);
    }
}
function mapStateToProps(state: RootState) {
    return {
        photos: state.photos.photos,
        profileName: state.photos.profileName,
    };
}
export const PhotoListContainer = withRouter(connect(mapStateToProps, { fetchPhotos })(PhotoList));
