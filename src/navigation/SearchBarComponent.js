import React, { Component } from 'react'

import {
    Form,
    FormControl,
    Button
} from 'react-bootstrap'

import './navigation.css'

class SearchBar extends Component {

    render() {
        return (
            <div className="search-bar-container">
                <Form inline position="left">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        );
    }
}

export default SearchBar;