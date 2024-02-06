import todos from "./todos.js";

const NEW_TODO_TEXT = "A simple todo Element";

const printResult = (action, result) => {
  //const time = (new Date()).toTimeString()
  const node = document.createElement("p");
  node.textContent = `${action.toUpperCase()}: ${JSON.stringify(result)}`;

  document.querySelector("div").appendChild(node);
};

/** 이벤트 리스너용 고차함수 */
// 조회 버튼 클릭 이벤트
const onListClick = async () => {
  const result = await todos.list();
  printResult("list todos", result);
};

// 추가 버튼 클릭 이벤트
const onAddClick = async () => {
  const result = await todos.create(NEW_TODO_TEXT);
  printResult("add todo", result);
};

// 수정 버튼 클릭 이벤트
const onUpdateClick = async () => {
  const list = await todos.list();

  const { id } = list[0];
  const newTodo = {
    id,
    completed: true,
  };

  const result = await todos.update(newTodo);
  printResult("update todo", result);
};

// 삭제 버튼 클릭 이벤트
const onDeleteClick = async () => {
  const list = await todos.list();
  const { id } = list[0];

  const result = await todos.delete(id);
  printResult("delete todo", result);
};

/** 버튼과 이벤트 연결 */
document
  .querySelector("button[data-list]")
  .addEventListener("click", onListClick);

document
  .querySelector("button[data-add]")
  .addEventListener("click", onAddClick);

document
  .querySelector("button[data-update]")
  .addEventListener("click", onUpdateClick);

document
  .querySelector("button[data-delete]")
  .addEventListener("click", onDeleteClick);
