import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPhotos } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }

        this.props.fetchPhotos('facebook')
    }

    render() {
        return (
            <div className="input-group">
                <input className="form-control"
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" 
                     onClick={e => this.props.fetchPhotos(this.state.term)}>Search</button>
                </span>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPhotos }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)