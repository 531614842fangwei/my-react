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
  container.appendChild(instance._renderDom())
  instance.onStateChange = (oldEl, newEl) => {
    container.insertBefore(newEl, oldEl) // 插入新的元素
    container.removeChild(oldEl) // 删除旧的元素
  }
}

export default { render }
