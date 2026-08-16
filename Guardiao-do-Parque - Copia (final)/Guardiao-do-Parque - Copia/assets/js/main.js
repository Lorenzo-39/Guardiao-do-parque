const btnPhoto = document.getElementById('btnPhoto');

btnPhoto.addEventListener('click', function () {

    capturePhoto();

    checkForm();

});

const nameInput = document.getElementById('nameInput');
const btnGenerate = document.getElementById('btnGenerate');

btnGenerate.addEventListener('click', function () {

    const name = nameInput.value;

    drawDiploma(name);

    document.getElementById('formArea').classList.add('hidden');
    document.getElementById('diplomaArea').classList.remove('hidden');

});

function checkForm() {

    const name = nameInput.value.trim();
    const nameError = document.getElementById('nameError');

    // Aceita letras, espaços e acentos
    const onlyLetters = /^[A-Za-zÀ-ÿ\s]+$/;

    if (name === '') {
        nameError.textContent = '';
        btnGenerate.disabled = true;
        return;
    }

    if (!onlyLetters.test(name)) {
        nameError.textContent = 'Digite apenas letras.';
        btnGenerate.disabled = true;
        return;
    }

    if (name.length < 3) {
        nameError.textContent = 'O nome deve ter pelo menos 3 letras.';
        btnGenerate.disabled = true;
        return;
    }

    nameError.textContent = '';
    
    const photoTaken = photoData !== null;

    btnGenerate.disabled = !photoTaken;
}

nameInput.addEventListener('input', checkForm);

const btnDownload = document.getElementById('btnDownload');

btnDownload.addEventListener('click', function () {
    const link = document.createElement('a');

    link.download = 'diploma-guardiao-do-parque.png';
    link.href = diplomaCanvas.toDataURL('image/png');

    link.click();
});

const btnAnother = document.getElementById('btnAnother');

btnAnother.addEventListener('click', function () {
    // Volta para o formulário
    document.getElementById('formArea').classList.remove('hidden');
    document.getElementById('diplomaArea').classList.add('hidden');

    // Limpa o nome
    nameInput.value = '';

    // Limpa a foto
    photoData = null;
    document.getElementById('photoPreview').src = '';

    // Limpa o diploma
    diplomaCanvas.getContext('2d').clearRect(
        0,
        0,
        diplomaCanvas.width,
        diplomaCanvas.height
    );

    // Desabilita novamente o botão de gerar
    checkForm();
});