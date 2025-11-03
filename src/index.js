// Select both pupils
const leftPupil = document.querySelector('.cornia_one');
const rightPupil = document.querySelector('.cornia_two');

// Eye centers (for calculating direction)
const leftEye = document.getElementById('one');
const rightEye = document.getElementById('two');

// Movement limits (so pupils don't go too far)
const PUPIL_RANGE = 30; // pixels

document.addEventListener('mousemove', (e) => {
    // Get eye positions
    const leftRect = leftEye.getBoundingClientRect();
    const rightRect = rightEye.getBoundingClientRect();

    // Eye centers
    const leftCenterX = leftRect.left + leftRect.width / 2;
    const leftCenterY = leftRect.top + leftRect.height / 2;
    const rightCenterX = rightRect.left + rightRect.width / 2;
    const rightCenterY = rightRect.top + rightRect.height / 2;

    // Mouse angle from eye center
    const leftAngle = Math.atan2(e.clientY - leftCenterY, e.clientX - leftCenterX);
    const rightAngle = Math.atan2(e.clientY - rightCenterY, e.clientX - rightCenterX);

    // Move pupils
    const leftX = Math.cos(leftAngle) * PUPIL_RANGE;
    const leftY = Math.sin(leftAngle) * PUPIL_RANGE;
    const rightX = Math.cos(rightAngle) * PUPIL_RANGE;
    const rightY = Math.sin(rightAngle) * PUPIL_RANGE;

    leftPupil.style.transform = `translate(${leftX}px, ${leftY}px)`;
    rightPupil.style.transform = `translate(${rightX}px, ${rightY}px)`;
});