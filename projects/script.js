let project = [
  {
    id: 1,
    projectName: "accordion",
    projectImage: "./assets/accordion.jpeg",
    projectLink: "./accordion/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 2,
    projectName: "countDownTimer",
    projectImage: "./assets/countDownTimer.jpeg",
    projectLink: "./countDownTimer/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 3,
    projectName: "BG color Changer",
    projectImage: "./assets/background.jpeg",
    projectLink: "./BGcolorChanger/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 4,
    projectName: "currency converter",
    projectImage: "./assets/currencyConverter.jpeg",
    projectLink: "./currencyConverter/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 5,
    projectName: "fetchData",
    projectImage: "./assets/fetchData.jpeg",
    projectLink: "./fetchData/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 6,
    projectName: "image Slider",
    projectImage: "./assets/imageSlider.jpeg",
    projectLink: "./imageSlider/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 7,
    projectName: "qr code generator",
    projectImage: "./assets/qrCode.jpeg",
    projectLink: "./qrCodeGenerator/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 8,
    projectName: "quiz app",
    projectImage: "./assets/quizApp.jpeg",
    projectLink: "./quizApp/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 9,
    projectName: "star Rating Component",
    projectImage: "./assets/star.jpeg",
    projectLink: "./starRatingComponent/index.html",
    ProjectCode: "./accordion/index.html",
  },
  {
    id: 10,
    projectName: "toast message",
    projectImage: "./assets/toast.jpeg",
    projectLink: "./toastMessage/index.html",
    ProjectCode: "./accordion/index.html",
  },
];

const projectContainer = document.querySelector(".project_container");
const showData = () => {
  projectContainer.innerHTML = project
    .map(
      (projectItem) => `
    <div class="project1 project">
          <h3 class="projectTitle">${projectItem.projectName}</h3>
          <img src=${projectItem.projectImage} alt=${projectItem.projectName} />
          <div class="links">
            <a
              href=${projectItem.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              >Live</a
            >
            <a
              href=${projectItem.ProjectCode}
              target="_blank"
              rel="noopener noreferrer"
              >code</a
            >
          </div>
        </div>
    `
    )
    .join("");
};

showData();
