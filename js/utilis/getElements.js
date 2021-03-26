const getElement = (selectedEl) => {
  const selectorElement = document.querySelector(selectedEl);

  if (selectorElement) {
    return selectorElement;
  } else {
    throw new Error("Element wasnt selected");
  }
};

export default getElement;
