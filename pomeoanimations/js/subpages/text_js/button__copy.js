function copyCode(button) {
    let codeText = button.previousElementSibling.innerText; // Pobiera tekst z <pre> obok przycisku
    let hiddenTextarea = document.getElementById("hiddenTextarea");

    hiddenTextarea.value = codeText;
    hiddenTextarea.select();
    hiddenTextarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Tekst skopiowany: " + codeText);
}