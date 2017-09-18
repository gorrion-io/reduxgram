import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectPhoto } from "actions/creators";
import { RootState } from "state/state";
import { Dispatch } from "types/redux";
import { PhotoList } from "components/photo-list";

function mapStateToProps(state: RootState) {
    return { photos: state.photos };
}
function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ onPhotoClicked: selectPhoto }, dispatch);
}
export const PhotoListContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoList);
