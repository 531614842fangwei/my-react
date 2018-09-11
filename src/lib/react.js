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
export default { createElement }
