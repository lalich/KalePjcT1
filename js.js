console.log('Hello Dr. Big D. Ready to StonkyBvB?')

const data = {}
const $stonkySearch = $('form');      // creates StonkySearch function
$stonkySearch.on('submit', event => {
    event.preventDefault();     // pulls $tonky $earch field and prevents wild refresh


const formData = new FormData(event.target);  // creates new variable from $stonkySearch for $tonky

const Stonky = formData.get('stonky').toUpperCase(); // had to add .toUC when using the polygon

const uprice = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${Stonky}&apikey=AESWZAZ89MXTH2XK`
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

    $.ajax(uprice)                    // grabs the price and price change in %
        .then(response => { 
            data.price = response['Global Quote']['05. price'];
            data.priceP = response['Global Quote']['10. change percent'] 
                                                      // console.log(price, priceP)
     const priceLi = $('<li>')
            priceLi.text('Price: $' + data.price)
                                                console.log(priceLi.text())
                                       // console.log(priceLi)
                ul.append(priceLi)

    const pricePLi = $('<li>')
            pricePLi.text(data.priceP)
            ul.append(pricePLi)
})

$.ajax(uvolume)      // grabs the volume
.then(response => { 
    data.volume = response['results']['0']['v'];
                                        // console.log(data.volume)
    
const volumeLi = $('<Li>')
        volumeLi.text(data.volume + ' shares')
                                             // console.log(volumeLi)
        ul.append(volumeLi)
                                             // console.log(volumeLi)

})

$.ajax(umktcapnshares)
    .then(response => {
        data.mktcap = response['results']['market_cap']
        data.sharesOutstanding = response['results']['weighted_shares_outstanding']

                                        //   console.log(data.mktcap, data.sharesOutstanding)
        const mktcapLi = $('<Li>')
        const sharesOutstandingLi = $('<Li>') 

                                                //  console.log(mktcapLi, sharesOutstandingLi)
        mktcapLi.text('$' + data.mktcap)
        sharesOutstandingLi.text(data.sharesOutstanding + ' shares')
        
        ul.append(mktcapLi, sharesOutstandingLi)
    
    })

    $.ajax(ursi)
        .then(response => {
            data.rsi = response['results']['values']['9']['value']
                                                    // console.log(data.RSI)
            const rsiLi = $('<li>')
            rsiLi.text(data.rsi)
            ul.append(rsiLi)
                 })

    $.ajax(ucr)
        .then(response => {
        data.ca = response['results']['0']['financials']['balance_sheet']['current_assets']
        data.cl = response ['results']['0']['financials']['balance_sheet']['current_liabilities']
        data.ocf = response['results']['0']['financials']['cash_flow_statement']['net_cash_flow_from_operating_activities']
    console.log(data.ca, data.cl, data.ocf)
            })

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


const modal = document.querySelector('stonk')  // makes modal an object to open during function of stonk search
function StonkyModal(open) {
    document.querySelector('#open')}  // open function 

function StonkyModal(close) {

 document.querySelector('#close')  // close function
}

addEventListener('submit', ($stonkySearch) => {    // trying to open the modal but really not getting this!
    
})})


console.log('ExnD')

// I found the baseline code after watching a few youtube videos and consulting ChatGPT this is what I got from it and am not sure 
// what the necessary steps are that I am missing, I know I need to define what makes the BvBBullish the result in the data pull. 
function ExnD() {
    console.log(data)
    

    $('#BvBButton').addClass('expand');   // creates shake and direct to BvB bull condition

    setTimeout(function() {

        const BvBBullish = true; 

        if (BvBBullish) {
            window.location.href = 'bull.html';

        }   else {
            window.location.href = 'bear.html';
        }
    }, 4200);
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