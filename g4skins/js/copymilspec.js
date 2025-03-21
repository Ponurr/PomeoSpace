document.getElementById("copyButton").addEventListener("click", function () {
  const inputField = document.getElementById("textInput");

  inputField.select();
  inputField.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(inputField.value)
    .then(() => {
      alert("Ponur Janchol MatiPapi");
    })
    .catch((err) => {
      console.error("Ponur Janchol MatiPapi", err);
    });
});
