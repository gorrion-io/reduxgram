import { RouterState } from "connected-react-router";

import { PhotosState } from "@src/features/photos/redux/state";

export interface RootState {
    readonly router: RouterState;
    readonly photos: PhotosState;
}
