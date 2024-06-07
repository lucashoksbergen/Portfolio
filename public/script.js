const grid = document.querySelector(`.gridwrapper`);
const title = document.querySelector(`#title`);

function clickGridItem() {
  // toggle popupwindow
  grid.style.display = "none";
  popupWindow.style.display = "flex";
  popupWindowClose.style.display = "block";
  title.style.display = "block";

  for (const child of popupWindow.children) {
    if (child.tagName == "IMG") {
      // replaces the image with an image with the same name as the project chosen.
      child.src = `imgs/${this.innerHTML}.png`;
    }
    if (child.tagName == "P") {
      child.innerHTML = sessionStorage.getItem(`${this.innerHTML}`);
    }

    if (child.tagName == "VIDEO") {
      child.src = `vids/${this.innerHTML}.mp4`;
    }
  }
}

function closePopup() {
  popupWindow.style.display = "none";
  popupWindowClose.style.display = "none";
  title.style.display = "none";

  grid.style.display = "flex";
}

const popupWindow = document.getElementById("popup");

const popupWindowClose = document.getElementById("closepopup");

// adds a click eventlistener to all the projects that are visible in the grid on the projects page.
const gridItems = Array.from(document.getElementsByClassName("gridproject"));
if (gridItems) {
  gridItems.forEach((element) =>
    element.addEventListener("click", clickGridItem)
  );
}
