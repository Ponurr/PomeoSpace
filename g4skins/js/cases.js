const boxes = document.getElementById("boxes");
const spinButton = document.getElementById("spinButton");
const boxWidth = 300;
const totalBoxes = 161;
const visibleBoxes = 5;
const spinDuration = 7000;

function spin() {
  spinButton.disabled = true;

  const winningIndex = Math.floor(Math.random() * totalBoxes);

  const offset = (winningIndex - Math.floor(visibleBoxes / 2)) * boxWidth;

  boxes.style.transition = `left ${spinDuration}ms cubic-bezier(0.33, 1, 0.68, 1)`;
  boxes.style.left = `-${offset}px`;

  setTimeout(() => {
    const winningBox = boxes.children[winningIndex];
    if (winningBox) {
      const weaponName = winningBox
        .querySelector(".box-normaltext")
        .textContent.trim();

      const weaponQuality = winningBox
        .querySelector('span[class^="box-"]:not(.box-normaltext)')
        .textContent.trim();

      showCustomAlert(`Wygrana: ${weaponName} - ${weaponQuality}`);
    } else {
      alert(`Nie udało się znaleźć wygranego boxa.`);
    }
    setTimeout(() => {
        
        boxes.style.transition = 'none';
        boxes.style.left = '0px';
        spinButton.disabled = false;
    }, 2000); 
   
  }, spinDuration);
}

spinButton.addEventListener("click", spin);
