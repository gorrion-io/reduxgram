import React, { Component } from "react";
import { connect } from "react-redux";
import * as history from "react-router-redux";

import { fetchPhotos } from "@src/actions/creators";
import { Dispatch } from "@src/types/redux";


interface Props {
    fetchPhotos(profileName: string): Promise<void>;
    redirectToProfile(name: string): history.RouterAction;
}
class SearchBar extends Component<Props> {

    private readonly initialProfileName = "pkosiec";
    private inputField: HTMLInputElement;

    private async onSearchSubmit() {
        const profileName = this.inputField.value;
        await this.props.fetchPhotos(profileName);
        this.props.redirectToProfile(profileName);
    }

    render() {
        return (
            <div className="input-group">
                <input
                    className="form-control"
                    ref={node => this.inputField = node!}
                    placeholder="profile name"
                    defaultValue={this.initialProfileName}
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.onSearchSubmit.bind(this)}
                    >
                        Search
                    </button>
                </span>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return { 
        fetchPhotos: (profileName: string) => dispatch(fetchPhotos(profileName)),
        redirectToProfile: (profileName: string) => dispatch(history.push(`/${profileName}`)),
    };
}
export const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);
