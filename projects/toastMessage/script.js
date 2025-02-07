const buttons = document.querySelectorAll(".btn");
const notification = document.querySelector(".toastContainer");

const toastMessage = (className, message) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  let icon;
  switch (className) {
    case "success":
      icon = '<i class="ri-checkbox-circle-fill"></i>';
      break;
    case "error":
      icon = '<i class="ri-close-circle-fill"></i>';
      break;
    case "info":
      icon = '<i class="ri-information-fill"></i>';
      break;
    default:
      break;
  }

  toast.innerHTML = icon + message;
  toast.classList.add(className);
  notification.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.5s ease-out";
    toast.style.opacity = 0;
  }, 2500);

  setTimeout(() => {
    toast.remove();
    toast.innerHTML = "";
  }, 3000);
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("success")) {
      toastMessage("success", "successfully submitted");
    } else if (button.classList.contains("error")) {
      toastMessage("error", "Please check the error coming");
    } else if (button.classList.contains("info")) {
      toastMessage("info", "already there");
    }
  });
});
