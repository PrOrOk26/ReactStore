import React, { Component } from 'react'

class SearchBar extends Component {
    
    render() {
        return (
            <Form inline position="left">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        );
    }
}

export default SearchBar;