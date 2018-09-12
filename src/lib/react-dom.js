/**
 *
 * @param {Element} element 内容
 * @param {Element} container 容器
 */
const render = (element, container) => {
  while (
    container.hasChildNodes() //当div下还存在子节点时 循环继续
  ) {
    container.removeChild(container.firstChild)
  }
  const instance = new element()
  container.appendChild(_renderDom(instance._renderDom()))
  instance.onStateChange = (oldEl, newEl) => {
    // TODO 在添加之前,加入diff算法
    // 暂时暴力移除
    while (
      container.hasChildNodes() //当div下还存在子节点时 循环继续
    ) {
      container.removeChild(container.firstChild)
    }
    container.append(_renderDom(newEl)) // 插入新的元素
  }
}

const _renderDom = ({ tag, props, children }) => {
  let dom = null
  if (typeof tag === 'string') {
    dom = document.createElement(tag)
  } else if (typeof tag === 'function') {
    dom = _renderDom(new tag()._renderDom())
  }
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
        dom.appendChild(_renderDom(item))
      }
    })
  }
  return dom
}

export default { render }
