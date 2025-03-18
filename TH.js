// Mảng lưu trữ danh sách công việc
let tasks = [];

// Hàm thêm công việc
function addTask(taskName) {
    const newTask = {
        id: Date.now(), // Tạo ID duy nhất cho công việc
        name: taskName,
        completed: false, // Trạng thái hoàn thành (mặc định là chưa hoàn thành)
    };
    tasks.push(newTask);
    displayTasks();
}

// Hàm sửa công việc
function editTask(taskId, newTaskName) {
    tasks = tasks.map((task) => {
        if (task.id === taskId) {
            task.name = newTaskName;
        }
        return task;
    });
    displayTasks();
}

// Hàm xóa công việc
function deleteTask(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId);
    displayTasks();
}

// Hàm hiển thị danh sách công việc
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Xóa danh sách cũ trước khi hiển thị lại

    tasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <span>${task.name}</span>
      <button onclick="editTask(${task.id}, prompt('Nhập tên công việc mới:', '${task.name}'))">Sửa</button>
      <button onclick="deleteTask(${task.id})">Xóa</button>
    `;
        taskList.appendChild(listItem);
    });
}

// Xử lý sự kiện khi người dùng thêm công việc
document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskName = document.getElementById("taskName").value;
    if (taskName) {
        addTask(taskName);
        document.getElementById("taskName").value = ""; // Xóa nội dung input sau khi thêm
    }
});

// Hiển thị danh sách công việc ban đầu
displayTasks();