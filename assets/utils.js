const isInView = (element) => {
  const rect = element?.getBoundingClientRect();
  const html = document?.documentElement;
  return (
    (rect &&
      rect?.top >= 100 &&
      rect?.top <= (window?.innerHeight || html?.clientHeight) - 100) ||
    (rect &&
      rect?.bottom >= 100 &&
      rect?.bottom <= (window?.innerHeight || html?.clientHeight))
  );
};


const addClassInViewSequentially = (className) => {
  const elements = document.querySelectorAll(`.${className}`);
  let index = 0;

  const addLoadedClass = () => {
    if (index < elements.length) {
      const element = elements[index];
      if (isInView(element)) {
        element.classList.add('loaded_animation');
        index++;
      }
    } else {
      // Remove the scroll event listener once all elements have been processed
      document.removeEventListener('scroll', addLoadedClass);
    }
  };

  // Attach the addLoadedClass function to the scroll event
  document.addEventListener('scroll', addLoadedClass);

  // Trigger the addLoadedClass function initially to handle elements already in view
  addLoadedClass();
};
