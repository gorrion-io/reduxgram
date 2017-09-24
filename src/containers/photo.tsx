import { connect } from "react-redux";

import { RootState } from "@src/state/state";
import { Photo } from "@src/components/photo";

function mapStateToProps(state: RootState) {
    return { photo: state.selectedPhoto };
}
export const PhotoContainer = connect(mapStateToProps)(Photo);
