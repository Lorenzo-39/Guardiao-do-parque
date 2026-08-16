let photoData = null;
async function startCamera() {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 300,
                height: 300,
                facingMode: 'user'
            }
        });

        const video = document.getElementById('video');

        video.srcObject = stream;

    } catch (err) {

        console.log('Câmera não disponível');

    }

}

function capturePhoto() {

    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');

    canvas.width = 300;
    canvas.height = 300;

    const ctx = canvas.getContext('2d');

    const size = Math.min(video.videoWidth, video.videoHeight);

    const sx = (video.videoWidth - size) / 2;
    const sy = (video.videoHeight - size) / 2;

    ctx.drawImage(
        video,
        sx,
        sy,
        size,
        size,
        0,
        0,
        300,
        300
    );

    photoData = canvas.toDataURL('image/jpeg', 0.9);

    const photoPreview = document.getElementById('photoPreview');

    photoPreview.src = photoData;
    photoPreview.style.display = 'block';
}