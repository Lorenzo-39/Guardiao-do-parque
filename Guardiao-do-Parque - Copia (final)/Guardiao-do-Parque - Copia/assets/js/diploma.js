const diplomaCanvas = document.getElementById('diplomaCanvas');

diplomaCanvas.width = 800;
diplomaCanvas.height = 600;

const ctx = diplomaCanvas.getContext('2d');


function drawDiploma(name) {

    // Limpa o Canvas
    ctx.clearRect(0, 0, 800, 600);

    // Fundo
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);

    gradient.addColorStop(0, '#fdfcf0');
    gradient.addColorStop(0.5, '#f9f3d5');
    gradient.addColorStop(1, '#fdfcf0');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    // Moldura externa
    ctx.strokeStyle = '#2d8a4e';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, 760, 560);

    // Moldura interna
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, 730, 530);

    // Título
    ctx.fillStyle = '#1a3c2a';
    ctx.font = 'bold 36px Georgia';
    ctx.textAlign = 'center';

    ctx.fillText(
        'DIPLOMA DE GUARDIÃO DO PARQUE',
        400,
        100
    );

    // Texto inicial
    ctx.fillStyle = '#333333';
    ctx.font = '20px Georgia';

    ctx.fillText(
        'Este certificado é concedido a',
        400,
        150
    );

    // Carrega a foto
    const photo = new Image();

    photo.onload = function () {

        // Foto
        ctx.save();

        ctx.beginPath();
        ctx.arc(400, 320, 100, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(
            photo,
            300,
            220,
            200,
            200
        );

        ctx.restore();

        ctx.beginPath();
        ctx.arc(400, 320, 102, 0, Math.PI * 2);
        ctx.strokeStyle = '#2d8a4e';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Nome
        ctx.fillStyle = '#1a3c2a';
        ctx.font = 'bold 30px Georgia';
        ctx.textAlign = 'center';

        ctx.fillText(
            name.trim(),
            400,
            470
        );

        // Texto
        ctx.fillStyle = '#333333';
        ctx.font = '18px Georgia';

        ctx.fillText(
            'por demonstrar compromisso com a',
            400,
            505
        );

        ctx.fillText(
            'preservação e cuidado com o meio ambiente.',
            400,
            530
        );

        // Data
        const today = new Date();

        const date = today.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        ctx.fillStyle = '#555555';
        ctx.font = '16px Georgia';
        ctx.textAlign = 'center';

        ctx.fillText(
            `Campinas, ${date}`,
            400,
            550
        );

        // Carrega a logo
        const logo = new Image();

        logo.onload = function () {

            ctx.drawImage(
                logo,
                580,
                440,
                190,
                160
            );

        };

        logo.src = 'assets/img/logo.png';

    };

    photo.src = photoData;
}