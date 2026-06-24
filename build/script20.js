$(document).ready(function () {
  function showModal(text) {
    $("#modalTaskText").text(text);
    let modal = new bootstrap.Modal($("#taskModal")[0]);
    modal.show();
  }
  function addEvents(item) {
    item.find(".delete-btn").click(function () {
      $(this).closest(".todo-item").remove();
    });
    item.find(".todo-check").change(function () {
      $(this).siblings(".todo-text").toggleClass("done");
    });
    item.find(".todo-text").click(function () {
      let text = $(this).text();
      showModal(text);
    });
  }
  $(".todo-form").submit(function (event) {
    event.preventDefault();
    let text = $(".todo-input").val().trim();
    if (text === "") {
      return;
    }
    let item = $(`
      <div class="todo-item">
        <div class="todo-left">
          <input type="checkbox" class="todo-check">
          <span class="todo-text">${text}</span>
        </div>
        <button class="delete-btn">Видалити</button>
      </div>
    `);
    $(".todo-list").append(item);
    $(".todo-input").val("");
    addEvents(item);
  });
  $(".todo-item").each(function () {
    addEvents($(this));
  });
});