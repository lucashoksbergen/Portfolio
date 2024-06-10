const grid = document.querySelector(`.gridwrapper`);
const title = document.querySelector(`#title`);
const popupWindow = document.getElementById("popup");
const popupWindowClose = document.getElementById("closepopup");

function clickGridItem(project) {
  for (const child of popupWindow.children) {
    if (child.tagName == "IMG") {
      // replaces the image with an image with the same name as the project chosen.
      child.src = `imgs/${project}.png`;
    }
    if (child.tagName == "P") {
      child.innerHTML = sessionStorage.getItem(`${project}`);
    }

    if (child.tagName == "VIDEO") {
      child.src = `vids/${project}.mp4`;
    }
  }
  // toggle popupwindow
  grid.style.display = "none";
  popupWindow.style.display = "flex";
  popupWindowClose.style.display = "flex";
  title.style.display = "block";
  title.innerHTML = project;
}

function closePopup() {
  popupWindow.style.display = "none";
  popupWindowClose.style.display = "none";
  title.style.display = "none";

  grid.style.display = "flex";
}
