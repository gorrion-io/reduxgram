import { Photo, Comment } from "interfaces/data";
import { ActionType } from "actions/types";
import { RootObject } from "interfaces/endpoint";
import { createActionCreator } from "actions/helpers";

export const selectPhoto = createActionCreator((photo: Photo) => ({
    type: ActionType.SELECT_PHOTO,
    payload: photo,
}));

export const fetchPhotos = createActionCreator((profileName: string) => async dispatch => {
    try {
        const response = await fetch(`https://igpi.ga/${profileName}/media`);
        const data = await response.json() as RootObject;
        const photos = data.items.map<Photo>(item => ({
            id: item.id,
            link: item.link,
            comments: item.comments.data.map<Comment>(comment => ({
                id: comment.id,
                username: comment.from.username,
                text: comment.text,
            })),
            images: {
                standard: item.images.standard_resolution.url,
                thumbnail: item.images.thumbnail.url,
            },
        }));

        dispatch({
            type: ActionType.FETCH_PHOTOS,
            payload: photos,
        });
    }
    catch (error) {
        console.error("Data fetching failed!", error);
    } 
});
