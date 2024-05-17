function clickGridItem() {
  // toggle popupwindow
  popupWindow.style.visibility = "visible";
}
// adds a click eventlistener to all the projects that are visible in the grid on the projects page.
let gridItems = Array.from(document.getElementsByClassName("grid"));
if (gridItems) {
  gridItems.forEach((element) =>
    element.addEventListener("click", clickGridItem)
  );
}

const popupWindow = document.getElementById("popup");
