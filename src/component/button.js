import React from '../lib/react'
const { createElement, Component } = React
class Button extends Component {
  render() {
    const dom = createElement(
      'button' // tag
    )
    return dom
  }
}
export default Button
