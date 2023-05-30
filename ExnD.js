console.log('ExnD')

function ExnD() {
    const BvB = StonkyBvB.getElementID("https://i.imgur.com/6d29qwX.jpg")

    BvB.classList.add('expand');

    setTimeout(function() {

        const BvBBullish = true; // creates shake and direct to BvB bull condition

        if (BvBBullish) {
            window.location.href = 'bull.html';

        }   else {
            window.location.href = 'bear.html';
        }
    }, 4200);
}