const numParticles = 550;
const minSize = 10;
const maxSize = 20;

function createParticles() {
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * (maxSize - minSize) + minSize;
        particle.className = 'particle';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;

        const animationDelay = Math.random() * 5; 
        particle.style.animationDelay = `${animationDelay}s`;
        document.body.appendChild(particle);
    }
}
createParticles();