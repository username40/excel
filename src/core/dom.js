// eslint-disable-next-line require-jsdoc
class Dom {
  // eslint-disable-next-line require-jsdoc
  constructor() {
  }
}

// eslint-disable-next-line require-jsdoc
export function $() {
  return new Dom()
}


$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes)
  }
  return el;
}
