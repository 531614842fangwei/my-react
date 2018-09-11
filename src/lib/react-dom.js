/**
 *
 * @param {Element} element 内容
 * @param {Element} container 容器
 */
const render = (element, container) => {
  container.innerHTML = new element().render()
}

export default { render }
