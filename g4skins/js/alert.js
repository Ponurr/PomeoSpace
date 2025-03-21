function showCustomAlert(message) {
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    customAlert.classList.remove('hidden');
}

function hideCustomAlert() {
    const customAlert = document.getElementById('customAlert');
    customAlert.classList.add('hidden');
}

document.getElementById('closeAlert').addEventListener('click', hideCustomAlert);
