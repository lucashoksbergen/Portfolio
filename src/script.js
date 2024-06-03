function clickGridItem() {
  // toggle popupwindow
  popupWindow.style.visibility = "visible";
  popupWindowBG.style.visibility = "visible";
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
  popupWindow.style.visibility = "hidden";
  popupWindowBG.style.visibility = "hidden";
}

const popupWindow = document.getElementById("popup");

const popupWindowBG = document.getElementById("closepopup");
// adds a click eventlistener to all the projects that are visible in the grid on the projects page.
const gridItems = Array.from(document.getElementsByClassName("grid"));
if (gridItems) {
  gridItems.forEach((element) =>
    element.addEventListener("click", clickGridItem)
  );
}
