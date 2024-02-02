const registry = {};

const renderWrapper = (component) => {
  return (targetElement, state, events) => {
    const element = component(targetElement, state, events);

    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      const name = target.dataset.component;
      console.log('name', name);

      const child = registry[name];
      console.log('child',child);
      if (!child) {
        return;
      }

      target.replaceWith(child(target, state, events));
    });
    console.log('element',element);
    return element;
  };
};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

const renderRoot = (root, state, events) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state, events);
};

export default {
  add,
  renderRoot,
};
