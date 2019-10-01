import PropTypes from 'prop-types'
import React, { Component } from 'react'

import NavigationBar from './NavigationBarComponent'

class LayoutComponent extends Component {

  render() {

    const { children } = this.props

    return (
      <div>
        <NavigationBar/>
        {children}
      </div>
    )
  }
}

LayoutComponent.propTypes = {
  children: PropTypes.node,
}

export default LayoutComponent;