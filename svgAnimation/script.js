document.addEventListener('mousemove', (event) => {
    const eyes = [
        { eye: document.querySelector('.sclera1'), pupil: document.querySelector('.pupil1') },
        { eye: document.querySelector('.sclera2'), pupil: document.querySelector('.pupil2') }
    ];

    eyes.forEach(({ eye, pupil }) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const maxOffset = 10; // Limit the pupil movement
        const offsetX = (event.clientX - eyeX) / 10; // Divide by 10 to reduce sensitivity
        const limitedOffsetX = Math.max(Math.min(offsetX, maxOffset), -maxOffset);
        pupil.setAttribute('x', 50 + limitedOffsetX);    
});

});