const markAll = document.querySelector(".mark-all");
const activeDot = document.querySelectorAll(".dot");
const activeNotifyContainer = document.querySelectorAll(".notify .new");
const notificationNum = document.querySelector(".note_num");

markAll.addEventListener("click", () => {
  notificationNum.style.display = "none";
  activeDot.forEach((value) => {
    value.style.display = "none";
  });
  activeNotifyContainer.forEach((val) => {
    val.style.backgroundColor = "White";
  });
});
