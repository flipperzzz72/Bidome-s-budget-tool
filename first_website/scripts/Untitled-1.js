

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/money.png") {
    myImage.setAttribute("src", "images/money2.png");
  } else {
    myImage.setAttribute("src", "images/money.png");
  }
});
