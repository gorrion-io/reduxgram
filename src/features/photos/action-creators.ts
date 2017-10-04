import { RootObject as EndpointReponse } from "@src/common/endpoint.interface";
import { createActionCreator } from "@src/redux/helpers";
import { ActionType } from "@src/redux/types";
import { PhotoData } from "@src/features/photos/photo-data.interface";
import { CommentData } from "@src/features/comments/comment-data.interface";

export const fetchPhotos = createActionCreator((profileName: string) => async (dispatch, getState) => {
    const state = getState();
    if (state.photos.isFetching) {
        return;
    }

    dispatch({
        type: ActionType.PHOTOS_FETCH_STARTED,
    });

    let response: Response;
    try {
        response = await fetch(`https://igpi.ga/${profileName}/media`);
    } catch (error) {
        console.error("Data fetching failed!", error);
        return;
    }
    const data = await response.json() as EndpointReponse;
    const photos = data.items.map<PhotoData>(item => ({
        id: item.code,
        link: item.link,
        comments: item.comments.data.map<CommentData>(comment => ({
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
        type: ActionType.PHOTOS_FETCHED,
        payload: {
            profileName,
            photos,
        },
    });
});
