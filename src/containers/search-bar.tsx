import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchPhotos } from "actions/creators";
import { Dispatch } from "types/redux";
import { SearchBar } from "components/search-bar";

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ fetchPhotos }, dispatch);
}

export const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);
