const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/money.png") {
        myImage.setAttribute("src", "images/money2.png")
    } else {
        myImage.setAttribute("src", "images/money.png")
    }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUsername() {
    const myName = prompt("Please type in your username");
    if (!myName) {
        setUsername();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bidome is cool, ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bidome is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
    setUsername();
});