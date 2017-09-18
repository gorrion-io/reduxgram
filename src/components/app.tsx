import React, { Component } from "react";

import { PhotoListContainer } from "containers/photo-list";
import { PhotoContainer } from "containers/photo";
import { SearchBarContainer } from "containers/search-bar";

export class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <SearchBarContainer />
                </div>
                <div className="row">
                    <PhotoContainer />
                    <PhotoListContainer />
                </div>
            </div>
        );
    }
}
