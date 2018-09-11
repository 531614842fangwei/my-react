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
  container.appendChild(new element().render())
}

export default { render }
