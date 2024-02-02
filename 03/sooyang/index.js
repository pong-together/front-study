import loginView from "./view/login.js";
import appView from "./view/app.js";

import registry from "./registry.js";
import applyDiff from "./applyDiff.js";

registry.add("app", appView);
registry.add("login", loginView);

const state = {
  loginStatus: "anonymous",
  language: "korean",
};

const events = {
  isLoged: () => {
    const ran = ["success", "fail"];
    const ranIdx = Math.floor(Math.random() * ran.length);
    let stateLogin = ran[ranIdx];
    if (stateLogin === "success") {
      state.loginStatus = "success";
    } else if (stateLogin === "fail") {
      state.loginStatus = "fail";
    }
    console.log(state.loginStatus);
    render();
  },
};

//anonymous
document.getElementById("login") &&
  document.getElementById("login").addEventListener("click", () => {
    const ranStat = ["success", "fail"];
    const ranIdx = Math.floor(Math.random() * ranStat.length);
    state.loginStatus = ranStat[ranIdx];
    render();
  });

const render = () => {
  window.requestAnimationFrame(() => {
    const $main = document.querySelector("#root");
    const newMain = registry.renderRoot($main, state, events);
    console.log('after render new main', newMain);
    applyDiff(document.body, $main, newMain);
  });
};

render();
