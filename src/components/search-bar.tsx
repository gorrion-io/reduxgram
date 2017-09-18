import React, { Component } from "react";

interface Props {
    fetchPhotos(name: string): any;
}
export class SearchBar extends Component<Props> {

    private readonly initialProfileName = "gorrion.pl";
    private inputField: HTMLInputElement;

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
                        onClick={() => this.props.fetchPhotos(this.inputField.value)}
                    >
                        Search
                    </button>
                </span>
            </div>
        );
    }
}
