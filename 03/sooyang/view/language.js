export default (targetElement, { language }, events) => {
  const element = targetElement.cloneNode(true);
  const btn = element.querySelector(".language-btn"); // 'language-btn' 클래스를 가진 버튼을 찾음
  const startBtn = element.querySelector(".start-btn"); // 'start-btn' 클래스를 가진 버튼을 찾음

  element.querySelector(".language-btn") &&
    element.querySelector(".language-btn").addEventListener("click", () => {
      let lang = document.getElementById("language-select").value;
      events.checkLanguage(lang);
    });

  if (language === "korean") {
    btn.textContent = '선택';
    startBtn.textContent = "시작하기";
  } else if (language === "american") {
    btn.textContent = "select";
    startBtn.textContent = "START";
  } else if (language === "japanese") {
    btn.textContent = "選択";
    startBtn.textContent = "始める";
  }
  return element;
};
