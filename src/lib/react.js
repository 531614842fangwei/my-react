/**
 *
 * @param { string } tag 标签可以是字符串也可以是方法
 * @param { object } props 元素的属性
 * @param { Element } children 子元素
 */
const createElement = (tag, props, ...children) => {
  const dom = document.createElement(tag)
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      dom[key] = props[key]
    }
  }
  if (children && children.length) {
    children.forEach(item => {
      if (typeof item === 'string') {
        dom.innerHTML = item
      } else {
        dom.appendChild(item)
      }
    })
  }
  return dom
}

//封装出共用的component
class Component {
  constructor() {
    this.state = {}
    this.ele = null
  }
  setState(state) {
    const oldEle = this.ele
    this.state = state
    this._renderDom()
    if (this.onStateChange) {
      this.onStateChange(oldEle, this.ele)
    }
  }
  _renderDom() {
    this.ele = this.render()
    return this.ele
  }
}
export default { createElement, Component }
