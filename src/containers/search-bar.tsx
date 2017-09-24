import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchPhotos } from "@src/actions/creators";
import { Dispatch } from "@src/types/redux";
import { SearchBar } from "@src/components/search-bar";

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ fetchPhotos }, dispatch);
}

export const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);
