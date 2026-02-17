
// Disparar confetes ao carregar
window.onload = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#a32a29", "#f39c12", "#000000"],
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#a32a29", "#f39c12", "#000000"],
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
};
