export default (container) => {
  const home = () => {
    container.textContent = "This is Home Page";
    container.style.backgroundColor = '';
  };

  const list = () => {
    container.textContent = "This is List Page";
    container.style.backgroundColor = 'blue';
  };

  const notFound = () => {
    container.textContent = "Page Not Found!";
    container.style.backgroundColor = 'red';
  };

  return {
    home,
    list,
    notFound,
  };
};
