const btnPhoto = document.getElementById('btnPhoto');

btnPhoto.addEventListener('click', function () {

    capturePhoto();

    checkForm();

});

const nameInput = document.getElementById('nameInput');
const btnGenerate = document.getElementById('btnGenerate');
const scoreInput = document.getElementById('scoreInput');

btnGenerate.addEventListener('click', function () {

    const name = nameInput.value;
    const score = Number(scoreInput.value);

    drawDiploma(name, score);

    document.getElementById('formArea').classList.add('hidden');
    document.getElementById('diplomaArea').classList.remove('hidden');
    confetti({
    particleCount: 150,
    spread: 100,
    origin: {
        y: 0.6
    }
});

});

function checkForm() {

    const name = nameInput.value.trim();
    const nameError = document.getElementById('nameError');

    const score = Number(scoreInput.value);
    const scoreError = document.getElementById('scoreError');

    // Validação do nome
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

    // Validação da pontuação
    if (
        scoreInput.value === '' ||
        !Number.isInteger(score) ||
        score < 0 ||
        score > 5
    ) {
        scoreError.textContent = 'Digite uma pontuação de 0 a 5.';
        btnGenerate.disabled = true;
        return;
    }

    scoreError.textContent = '';

    // Verifica se existe foto
    const photoTaken = photoData !== null;

    btnGenerate.disabled = !photoTaken;
}

nameInput.addEventListener('input', checkForm);
scoreInput.addEventListener('input', checkForm);

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

    // Limpa a pontuação
    scoreInput.value = '';

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
