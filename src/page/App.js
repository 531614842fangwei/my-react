import React from '../lib/react'
const { createElement } = React
class App {
  setText(text) {
    const likeText = document.querySelector('.like-text')
    likeText.innerHTML = text
  }
  render() {
    const dom = createElement(
      'button', // tag
      {
        id: 'like-btn',
        onclick: () => {
          console.log('哈哈')
          this.setText('sdf')
        }
      }, // props
      createElement('span', { className: 'like-text' }, '赞赏'), // children
      createElement('span', { className: 'like-text' }, '👍')
    )
    return dom
  }
}
export default App
