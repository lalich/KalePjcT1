console.log('ExnD')
// I found the baseline code after watching a few youtube videos and consulting ChatGPT this is what I got from it and am not sure 
// what the necessary steps are that I am missing, I know I need to define what makes the BvBBullish the result in the data pull. 
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