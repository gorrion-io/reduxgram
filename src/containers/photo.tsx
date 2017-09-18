import { connect } from "react-redux";

import { RootState } from "state/state";
import { Photo } from "components/photo";

function mapStateToProps(state: RootState) {
    return { photo: state.selectedPhoto };
}
export const PhotoContainer = connect(mapStateToProps)(Photo);
