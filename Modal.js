function delay(message, delay){
setTimeout(function() {
    console.log(message);

}, delay);
}

delay('LFG Dr.', 6900)



//            // all for reference to use JS to control the Modal, I had some difficulty trying to implement it
//            // all onto one JS file taking this route using the Alex Merced "https://www.youtube.com/watch?v=BfXGsBRQwMk"
//            // instruction to hopefully help.
// // <div id="StonkyModal" class="modal">    <!-- starts the StonkyModal for results pop-up & BvB -->
// // <div class="StonkyRes">                     <!-- class for css the StonkyModal -->
    
// // <button id="BvB">What does the BvB-8-ball think?        <!-- StonkyBvB button text -->
// //     <img src="https://i.imgur.com/6d29qwX.jpg" alt="">      <!-- M8Ball StonkyModal img -->
  
// //     <div>
        

// // </button>
// // </div>   <!-- closes the StonkyModal -->


// class StonkyModal extends HTMLElement {
//     constructor() {
//         super()
//         this.attachShadow({mode: 'open'})
//         this.render()
//     }

//     render(){

//         const style = `
//         <style>
//         .modal { 
//             position: fixed;
//             height: 75vh;
//             width: 75vh;
//             background-color: black;

//         }`

//         const template = `
//         <div class='Stonky'>
//         <div class='modal'>
//         <div Class='StonkRes'>
//         <slot>${Stonky}</slot>
//         <slot>${Price}, ${PriceP}</slot>
//         <slot>${Volume}</slot>
//         <slot>${MktCap}</slot>
//         <slot>${SharesOutstanding}</slot>
//         <slot>${RSI}</slot>
//         <slot>${CR}</slot>
//         </div
//         `
//         this.shadowRoot.innerHTML = `${style} ${template}`
//     }

//     open(){
// this.shadowRoot.querySelector('Stonky').style.display = 'flex'
//     }
    
//     close(){
//         this.shadowRoot.querySelector('Stonky').style.display = 'none'


// customElements.define("StonkyModal", StonkyModal)
//     }}