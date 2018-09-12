/**
 *
 * @param { string } tag 标签可以是字符串也可以是方法
 * @param { object } props 元素的属性
 * @param { Element } children 子元素
 * 创建reactElement,这个地方其实不应该写任何跟dom操作相关的东西，仅仅是js对象的创建
 */
const createElement = (tag, props, ...children) => {
  const reactNode = {}
  reactNode.tag = tag
  reactNode.props = props
  reactNode.children = children
  return reactNode
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
