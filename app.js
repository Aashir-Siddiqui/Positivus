document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('mouseover', () => {
        const card = button.closest('.card');
        card.style.backgroundColor = '#B9FF66';
        card.querySelector('.txt1').style.backgroundColor = '#ffffff';
        card.querySelector('.txt1').style.transform = 'rotate(2deg)';
        card.querySelector('.txt2').style.backgroundColor = '#ffffff';
        card.querySelector('.txt2').style.transform = 'rotate(-1deg)';
        card.querySelector('.learn-more').style.transform = 'scale(1.1)';
        card.querySelector('.learn-more img').style.backgroundColor = '#ffffff'
    });
    button.addEventListener('mouseout', () => {
        const card = button.closest('.card');
        card.style.backgroundColor = '#F3F3F3';
        card.querySelector('.txt1').style.backgroundColor = '#B9FF66';
        card.querySelector('.txt1').style.transform = 'rotate(-2deg)';
        card.querySelector('.txt2').style.backgroundColor = '#B9FF66';
        card.querySelector('.txt2').style.transform = 'rotate(1deg)';
        card.querySelector('.learn-more').style.transform = 'scale(1)';
        card.querySelector('.learn-more img').style.backgroundColor = '#B9FF66'
    });
});

document.querySelectorAll('.learn-more2').forEach(button => {
    button.addEventListener('mouseover', () => {
        const card = button.closest('.card2');
        card.style.backgroundColor = '#F3F3F3';
        card.querySelector('.learn-more2').style.transform = 'scale(1.1)';
        card.querySelector('.txt3').style.backgroundColor = '#B9FF66';
        card.querySelector('.txt4').style.backgroundColor = '#B9FF66';
        card.querySelector('.txt3').style.transform = 'rotate(2deg)';
    });
    button.addEventListener('mouseout', () => {
        const card = button.closest('.card2');
        card.style.backgroundColor = '#B9FF66';
        card.querySelector('.learn-more2').style.transform = 'scale(1)';
        card.querySelector('.txt3').style.backgroundColor = '#ffffff';
        card.querySelector('.txt4').style.backgroundColor = '#ffffff';
        card.querySelector('.txt3').style.transform = 'rotate(-2deg)';
    });
});

document.querySelectorAll('.learn-more3').forEach(button => {
    button.addEventListener('mouseover', () => {
        const card = button.closest('.card3');
        card.style.backgroundColor = '#B9FF66';
        card.querySelector('.txt5').style.backgroundColor = '#ffffff';
        card.querySelector('.txt6').style.backgroundColor = '#ffffff';
        card.querySelector('.txt6').style.transform = 'rotate(-4deg)';
        card.querySelector('.learn-more3').style.transform = 'scale(1.1)';
        card.querySelector('.learn-more3 img').style.backgroundColor = '#ffffff'
        card.querySelector('.learn-more3 h2').style.color = '#000000'
    });
    button.addEventListener('mouseout', () => {
        const card = button.closest('.card3');
        card.style.backgroundColor = '#555555';
        card.querySelector('.txt5').style.backgroundColor = '#B9FF66';
        card.querySelector('.txt6').style.backgroundColor = '#B9FF66';
        card.querySelector('.txt6').style.transform = 'rotate(4deg)';
        card.querySelector('.learn-more3').style.transform = 'scale(1)';
        card.querySelector('.learn-more3 img').style.backgroundColor = '#B9FF66'
        card.querySelector('.learn-more3 h2').style.color = '#ffffff'
    });
});

// const heroBtn = document.querySelector('.hero-btn ')

// heroBtn.addEventListener('mouseover', () => {
//     document.querySelector('.hero-Btn').style.paddingBottom = '12px'
//     heroBtn.style.backgroundColor = '#B9FF66'
//     heroBtn.style.color = '#000000'
// })

// heroBtn.addEventListener('mouseout', () => {
//     heroBtn.style.backgroundColor = '#000000'
//     heroBtn.style.color = '#ffffff'
//     document.querySelector('.hero-Btn').style.paddingBottom = '0px'
// })