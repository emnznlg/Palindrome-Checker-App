const textInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoText = document.querySelector(".info-text");
const infoTextSpan = document.querySelector(".info-text span");

textInput.addEventListener("keyup", () => {
  filterInputTransformed = textInput.value
    .toLowerCase()
    .replace(/[^A-Z0-9]/gi, "");
  console.log(filterInputTransformed);

  if (filterInputTransformed) {
    checkBtn.classList.add("active");
  } else {
    checkBtn.classList.remove("active");
    infoText.style.display = "none";
  }
});

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInputTransformed.split("").reverse().join("");

  if (reverseInput === filterInputTransformed) {
    infoText.style.display = "block";
    infoText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`;
  } else {
    infoText.style.display = "block";
    infoText.innerHTML = `No, <span>'${textInput.value}'</span> is not a palindrome!`;
  }
});
