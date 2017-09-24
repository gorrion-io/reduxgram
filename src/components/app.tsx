import React, { Component } from "react";

import { PhotoListContainer } from "@src/containers/photo-list";
import { PhotoContainer } from "@src/containers/photo";
import { SearchBarContainer } from "@src/containers/search-bar";

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
