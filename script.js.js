// Animação do sol com raios triangulares
function animateSun() {
    const canvas = document.getElementById('solarCanvas');
    const ctx = canvas.getContext('2d');
    let angle = 0;

    function drawSun() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;

        // Limpar o canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Desenhar o círculo do sol
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#f39c12';
        ctx.fill();

        // Desenhar os raios triangulares
        const numberOfRays = 12;
        const rayLength = 70;

        for (let i = 0; i < numberOfRays; i++) {
            ctx.beginPath();
            const x1 = centerX + radius * Math.cos(angle + (i * Math.PI * 2 / numberOfRays));
            const y1 = centerY + radius * Math.sin(angle + (i * Math.PI * 2 / numberOfRays));

            const x2 = centerX + (radius + rayLength) * Math.cos(angle + (i * Math.PI * 2 / numberOfRays) + 0.1);
            const y2 = centerY + (radius + rayLength) * Math.sin(angle + (i * Math.PI * 2 / numberOfRays) + 0.1);

            const x3 = centerX + (radius + rayLength) * Math.cos(angle + (i * Math.PI * 2 / numberOfRays) - 0.1);
            const y3 = centerY + (radius + rayLength) * Math.sin(angle + (i * Math.PI * 2 / numberOfRays) - 0.1);

            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x3, y3);
            ctx.closePath();
            ctx.fillStyle = '#f1c40f';
            ctx.fill();
        }

        angle += 0.01;
    }

    function loop() {
        drawSun();
        requestAnimationFrame(loop);
    }

    canvas.width = window.innerWidth;
    canvas.height = 400;

    loop();
}

// Modal de Cadastro
const modal = document.getElementById("modalCadastro");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function() {
    animateSun();
};
