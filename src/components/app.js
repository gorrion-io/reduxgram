import React, { Component } from 'react'
import axios from 'axios'

import PhotoList from '../containers/photo-list'
import Photo from '../containers/photo'
import SearchBar from '../containers/search-bar'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <SearchBar />
                </div>
                <div className="row">
                    <Photo />
                    <PhotoList />
                </div>
            </div>
        )
    }
}