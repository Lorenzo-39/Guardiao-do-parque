const diplomaCanvas = document.getElementById('diplomaCanvas');

diplomaCanvas.width = 600;
diplomaCanvas.height = 400;

const ctx = diplomaCanvas.getContext('2d');


function drawDiploma(name , score) {

    // Limpa o Canvas
    ctx.clearRect(0, 0, 600, 400);

    // Fundo
    const gradient = ctx.createLinearGradient(0, 0, 600, 400);

    gradient.addColorStop(0, '#fdfcf0');
    gradient.addColorStop(0.5, '#f9f3d5');
    gradient.addColorStop(1, '#fdfcf0');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);

    // Moldura externa
    ctx.strokeStyle = '#1565c0';
    ctx.lineWidth = 8;
    ctx.strokeRect(15, 15, 570, 370);

    // Moldura interna
    ctx.lineWidth = 2;
    ctx.strokeRect(28, 28, 544, 344);

    // Título
    ctx.fillStyle = '#1565c0';
    ctx.font = 'bold 26px Georgia';
    ctx.textAlign = 'center';

    ctx.fillText(
        'DIPLOMA DE GUARDIÃO DO PARQUE',
        300,
        65
    );

    // Texto inicial
    ctx.fillStyle = '#333333';
    ctx.font = '16px Georgia';

    ctx.fillText(
        'Este certificado é concedido a',
        300,
        95
    );

    // Carrega a foto
    const photo = new Image();
    const logo = new Image();

    photo.onload = function () {

        // Foto
        ctx.save();

        ctx.beginPath();
        ctx.arc(300, 195, 65, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(
            photo,
            235,
            130,
            130,
            130
        );

        ctx.restore();

        // Borda da foto
        ctx.beginPath();
        ctx.arc(300, 195, 67, 0, Math.PI * 2);
        ctx.strokeStyle = '#1565c0';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Nome
        ctx.fillStyle = '#1565c0';
        ctx.font = 'bold 24px Georgia';
        ctx.textAlign = 'center';

        ctx.fillText(
            name.trim(),
            300,
            285
        );

        // Estrelas da pontuação
        drawStars(score);

        // Texto
        ctx.fillStyle = '#333333';
        ctx.font = '15px Georgia';

        ctx.fillText(
            'por demonstrar compromisso com a',
            300,
            327
        );

        ctx.fillText(
            'preservação e cuidado com o meio ambiente.',
            300,
            342
        );

        // Data
        const today = new Date();

        const date = today.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        ctx.fillStyle = '#555555';
        ctx.font = '13px Georgia';
        ctx.textAlign = 'center';

        ctx.fillText(
            `Campinas, ${date}`,
            300,
            359
        );
    };

    photo.src = photoData;
}

function drawStars(score) {

    const centerX = 300;
    const y = 300;

    const size = 11;
    const spacing = 33;

    for (let i = 0; i < 5; i++) {

        const x = centerX + (i - 2) * spacing;

        drawStar(
            x,
            y,
            size,
            i < score
        );
    }
}


function drawStar(x, y, radius, filled) {

    ctx.save();

    ctx.beginPath();

    for (let i = 0; i < 10; i++) {

        const angle = -Math.PI / 2 + i * Math.PI / 5;

        const currentRadius =
            i % 2 === 0
                ? radius
                : radius * 0.45;

        const px = x + Math.cos(angle) * currentRadius;
        const py = y + Math.sin(angle) * currentRadius;

        if (i === 0) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }

    ctx.closePath();

    if (filled) {

        ctx.fillStyle = '#f2c94c';
        ctx.fill();

    } else {

        ctx.strokeStyle = '#999999';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    ctx.restore();
}
