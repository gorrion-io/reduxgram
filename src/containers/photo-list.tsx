import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectPhoto } from "@src/actions/creators";
import { RootState } from "@src/state/state";
import { Dispatch } from "@src/types/redux";
import { PhotoList } from "@src/components/photo-list";

function mapStateToProps(state: RootState) {
    return { photos: state.photos };
}
function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ onPhotoClicked: selectPhoto }, dispatch);
}
export const PhotoListContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoList);
