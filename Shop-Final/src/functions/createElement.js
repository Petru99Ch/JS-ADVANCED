const createElement = (tag, className) => {
    let element = document.createElement(tag)
    element.className = className
    return element
}