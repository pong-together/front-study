const getLoginTemplate = (state) => {
  let template;

  if (state.loginStatus === "success") {
    template = document.getElementById("language");
  } else {
    template = document.getElementById("login");
  }
  return template.content.firstElementChild.cloneNode(true);
};

export default (targetElement, state, { isLoged, checkLanguage }) => {
  let newLoginStatus = targetElement.cloneNode(true);
  newLoginStatus.innerHTML = "";

  newLoginStatus.appendChild(getLoginTemplate(state));

  newLoginStatus.querySelector(".login-btn") &&
    newLoginStatus.querySelector(".login-btn").addEventListener("click", () => {
      isLoged();
    });

  return newLoginStatus;
};
