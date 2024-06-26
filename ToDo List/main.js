window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_e1 = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log("Submit form");

    const task = input.value;

    if (!task) {
      alert("please fill out the task");
      return;
    }

    const task_e1 = document.createElement("div");
    task_e1.classList.add("task");

    const task_content_e1 = document.createElement("div");
    task_content_e1.classList.add("content");

    task_e1.appendChild(task_content_e1);

    const task_input_e1 = document.createElement("input");
    task_input_e1.classList.add("text");
    task_input_e1.type = "text";
    task_input_e1.value = task;
    task_input_e1.setAttribute("readonly", "readonly");

    task_content_e1.appendChild(task_input_e1);
    const task_actions_e1 = document.createElement("div");
    task_actions_e1.classList.add("action");

    const task_edit_e1 = document.createElement("button");
    task_edit_e1.classList.add("edit");
    task_edit_e1.innerHTML = "Edit";

    const task_delete_e1 = document.createElement("button");
    task_delete_e1.classList.add("delete");
    task_delete_e1.innerHTML = "Delete";

    task_actions_e1.appendChild(task_edit_e1);
    task_actions_e1.appendChild(task_delete_e1);

    task_e1.appendChild(task_actions_e1);

    list_e1.appendChild(task_e1);

    input.value = "";
    task_edit_e1.addEventListener("click", () => {
      if (task_edit_e1.innerText.toLowerCase() == "edit") {
        task_input_e1.removeAttribute("readonly");
        task_input_e1.focus();
        task_edit_e1.innerText = "save";
      } else {
        task_input_e1.setAttribute("readonly", "readonly");
        task_edit_e1.innerText = "Edit";
      }
    });

    task_delete_e1.addEventListener("click", () => {
      list_e1.removeChild(task_e1);
    });
  });
});
