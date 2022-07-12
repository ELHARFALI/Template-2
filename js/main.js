// Toggle Spin Class On Icon
const toggleSettings = document.querySelector(".toggle-settings");

toggleSettings.addEventListener("click", function () {
  const settingsBox = document.querySelector(".settings-box");

  this.classList.toggle("fa-spin");

  if (settingsBox.classList.contains("open")) {
    settingsBox.classList.remove("open");
  } else {
    settingsBox.classList.add("open");
  }
});
