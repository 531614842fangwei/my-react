import React from '../lib/react'
const { createElement } = React
class App {
  constructor() {
    this.state = {
      status: false // 默认不是赞赏状态
    }
  }
  // 在setState中设置数据，并且调用render来更新元素
  setState(state) {
    const oldEle = this.ele
    this.state = state
    this.ele = this.render()
    if (this.onStateChange) {
      this.onStateChange(oldEle, this.ele)
    }
  }
  // setText中使用了dom操作，与我们想要的不符
  // setText(text) {
  //   const likeText = document.querySelector('.like-text')
  //   likeText.innerHTML = text
  // }
  render() {
    const currentStatus = this.state.status
    const dom = createElement(
      'button', // tag
      {
        id: 'like-btn',
        onclick: () => {
          this.setState({ status: !currentStatus })
        }
      }, // props
      createElement(
        'span',
        { className: 'like-text' },
        currentStatus ? '赞赏' : '取消赞'
      ), // children
      createElement('span', { className: 'like-text' }, '👍')
    )
    this.ele = dom
    return this.ele
  }
}
export default App
