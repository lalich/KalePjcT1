console.log('Hello Dr. Big D. Ready to StonkyBvB?')

const data = {}         // creates data variable to be used in the stonky bvbBullish function later
const BvBBullish = {} // creates a const that can be used in if/else statement when all conditions are met
const $stonkySearch = $('form');       // pulls the text from the form
$stonkySearch.on('submit', event => {     // creates StonkySearch function
    event.preventDefault();     // pulls $tonky $earch field and prevents wild refresh
$('#StonkyData').empty()        // clears contents of the UL on the DOM on a new search


const formData = new FormData(event.target);  // creates new variable from $stonkySearch for $tonky

const Stonky = formData.get('stonky').toUpperCase(); // had to add .toUC when using the polygon



// const buttonText = 'What does the BVB-8-Ball think about ' + Stonky + ' ?'
// $('.BvBbutton').text(buttonText)
// $('.BvBbutton').ul("StonkyData")
// $('.BvBbutotn').img="https://i.imgur.com/6d29qwX.jpg", alt="StonkyBvB-Magic-8-Ball" 


const uprice = `https://api.polygon.io/v2/aggs/ticker/${Stonky}/prev?adjusted=true&apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`
const uvolume = `https://api.polygon.io/v2/aggs/ticker/${Stonky}/range/1/day/2023-01-09/2023-01-09?apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`
const umktcapnshares = `https://api.polygon.io/v3/reference/tickers/${Stonky}?apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`
const ursi = `https://api.polygon.io/v1/indicators/rsi/${Stonky}?timespan=day&adjusted=true&window=14&series_type=close&order=desc&apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`
const ucr = `https://api.polygon.io/vX/reference/financials?ticker=${Stonky}&apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`
const ul = $('#StonkyData')



// make all useful data as a universal to be used in the BvBfunction
// console.log(ul)


// console.log(uprice) 
// console.log(uvolume)
// console.log(umktcapnshares)
// console.log(uRSI)
// console.log(uCR)



            // grabs the price
    $.ajax(uprice)                    
        .then(response => { 
// console.log(response)
            data.name = response['results']['0']['T']
// console.log(data.name)
            data.price = response['results']['0']['vw']
// console.log(data.price)                                
     const priceLi = $('<li>')
            priceLi.text('Price: $' + data.price.toFixed(2))
// console.log(priceLi.text())
// // console.log(priceLi)
                setTimeout(() => {
                    ul.append(priceLi)
                }, 69)

})
                // Volume grab not used BvB yet!
            $.ajax(uvolume)      
            .then(response => { 
                      data.volume = response['results']['0']['v'];
// console.log(data.volume)
    
            const volumeLi = $('<Li>')
             volumeLi.text('Volume: ' + data.volume.toLocaleString() + ' shares')
// console.log(volumeLi)
               setTimeout(() => {
                ul.append(volumeLi)
               }, 211); 
 // console.log(volumeLi)

})
            //  Current Ratio section too be used in BvBBullish
                $.ajax(ucr)
                .then(response => {
                       data.ca = response['results']['0']['financials']['balance_sheet']['current_assets']['value']
                        data.cl = response ['results']['0']['financials']['balance_sheet']['current_liabilities']['value']
                        data.ocf = response['results']['0']['financials']['cash_flow_statement']['net_cash_flow_from_operating_activities']['value']
// console.log(data.ca, data.cl, data.ocf)
                const ocfLi = $('<Li>')
                ocfLi.text('Operating CF: $ ' + data.ocf.toLocaleString())
                    
                setTimeout(() => {
                    ul.append(ocfLi)
                }, 420) 

                    const crLi = $('<Li>')
                        crLi.text('Current Ratio: ' + (data.ca / data.ocf).toFixed(2).toLocaleString())
                           setTimeout(() => {
                            ul.append(crLi)
                           }, 741) 

})          // Mkt Cap and Shares outstandig, neither to be used on BVBBulish... yet!
        $.ajax(umktcapnshares)
          .then(response => {
              data.mktcap = response['results']['market_cap']
              data.sharesOutstanding = response['results']['weighted_shares_outstanding']

 //   console.log(data.mktcap, data.sharesOutstanding)
               const mktcapLi = $('<Li>')
                const sharesOutstandingLi = $('<Li>') 

 //  console.log(mktcapLi, sharesOutstandingLi)
               mktcapLi.text('Mkt. Capitilization: $' + data.mktcap.toLocaleString())
             sharesOutstandingLi.text('Shares Outstanding: ' + data.sharesOutstanding.toLocaleString() + ' shares')
        
              setTimeout(() => {
                ul.append(mktcapLi)
              }, 1000)
                setTimeout(() => {
                    ul.append(sharesOutstandingLi)
                }, 1420)
    
    })
                // RSI - relative strength to be used in BvBBullish
         $.ajax(ursi)
           .then(response => {
               data.rsi = response['results']['values']['9']['value']
 // console.log(data.RSI)
            const rsiLi = $('<li>')
                rsiLi.text('Relative Strength: ' + data.rsi.toFixed(2).toLocaleString())
                     setTimeout (() => {
                        ul.append(rsiLi)
                     },1690)
                 })




$(`[name='stonky']`)[0].value = '';






})
// const modal = document.querySelector('stonk')  // makes modal an object to open during function of stonk search
// function StonkyModal(open) {
//     document.querySelector('#open')}  // open function 

// function StonkyModal(close) {

//  document.querySelector('#close')  // close function
// }

// addEventListener('submit', ($stonkySearch) => {    // trying to open the modal but really not getting this!
    
// })



// console.log('ExnD')

// console.log(data)







// I found the baseline code after watching a few youtube videos and consulting ChatGPT this is what I got from it and am not sure 
// what the necessary steps are that I am missing, I know I need to define what makes the BvBBullish the result in the data pull. 
function ExnD() {
    // console.log(data)
    
const imageElement = document.getElementById('BvB-8-Ball');
imageElement.classList.add('expand')
    // $('#BvBButton').addClass('expand');   // creates shake and direct to BvB bull condition

    setTimeout(function() {
        const Stonky = data.name
        // const bull = 'bull.html'   // dont think these were necessary nor did they work
        // const bear = 'bear.html'
        
        // function bullH1(Stonky) {
        //     const h1 = document.getElementById('bvbBullTitle');
        //     const bvbBullTitle = document.createElement('h1)');
        //     bvbBullTitle.textContent = 'The BvB-8-Ball is Bullish on ' + Stonky + '!';
        // h1.appendChild(bvbBullTitle);
        // }
        // function bullH1(Stonky) {
        //     const h1 = document.getElementById('bvbBullTitle');
        //     const bvbBullTitle = document.createElement('h1)');
        //     bvbBullTitle.textContent = 'The BvB-8-Ball is Bullish on ' + Stonky + '!';
        // h1.appendChild(bvbBullTitle);
        // }

         // const bvbBullrTitle = $('<h1>')
        // bvbBullrTitle.text('The BvB-8-Ball is Bullish on ' + Stonky + '!')
        // $('bvbBullTitle').append(bvbBullTitle);

        // const bvbBearTitle = $('<h1>')
        // bvbBearTitle.text('The BvB-8-Ball is Bearish on ' + Stonky + '!')
        // $('bvbBearTitle').append(bvbBearTitle);
       
         const condition1 = (data.ocf > 0)
                                                     // console.log(condition1)

         const condition2 = ((data.ca - data.cl) > 0)
         const condition3 = (data.rsi < 83)
       
                                                    console.log(condition1, condition2, condition3)
        
         if (condition1 && condition2 && condition3)
               
          window.location.href = 'bull.html';

           else 
         
            window.location.href = 'bear.html';
        }
, 4200);
}

// alert.Stonky('') 
// alert.BvB('')

// modul 

//  API Key Polygon: HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn
// API pip install yfinance (python?)

// const APIUrl = https://api.polygon.io/v2/aggs/ticker/${Stonky}/range/1/day/2023-01-09/2023-01-09?apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn;
// const apiKey =  HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn;

// Authorization: Bearer HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn


// Welcome to Alpha Vantage! Your dedicated access key is: AESWZAZ89MXTH2XK. 
// Please record this API key at a safe place for future data access.
// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${Stonky}&apikey=AESWZAZ89MXTH2XK

// switched to full polygon with paid access I felt it was the right time to avoid using multiple data providders(6/1)


   // fetch(uvolume)         // fetch the volume
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(response => console.log(['results']['0']['v']))
    //         const data.volume = response['resi;ts']['0']['v']

    // fetch(umktcapnshares)                // fetch the mkt cap
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => console.log(data['results']['weighted_shares_outstanding'], data['results']['market_cap']))
            
    // fetch(uRSI)         // fetch the option open interest
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => console.log(data['results']['values']['9']['value']))
            
    // fetch(uCR)         // fetch the option open interest
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => console.log(data['results']['0']['financials']['balance_sheet']['current_assets'], 
    //         data['results']['0']['financials']['balance_sheet']['current_liabilities'], 
    //         data['results']['0']['financials']['cash_flow_statement']['net_cash_flow_from_operating_activities']));;
//                                              const pricePLi = $('<li>')
//                                                   pricePLi.text('% Change: ' + data.priceP)
// //                                                     ul.append(pricePLi)
// data.priceP = response['Global Quote']['10. change percent'] 
// //                                                       // console.log(price, priceP)