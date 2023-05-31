console.log('Hello Dr. Big D. Ready to StonkyBvB?')

const $stonkySearch = $('form');      // creates StonkySearch function
$stonkySearch.on('submit', event => {
    event.preventDefault();     // pulls $tonky $earch field and prevents wild refresh


const formData = new FormData(event.target);  // creates new variable from $stonkySearch for $tonky

const Stonky = formData.get('stonky')

const uprice = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${Stonky}&apikey=AESWZAZ89MXTH2XK`
const uvolume = `https://api.polygon.io/v2/aggs/ticker/${Stonky}/range/1/day/2023-01-09/2023-01-09?apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`
const umktcapnshares = `https://api.polygon.io/v3/reference/tickers/${Stonky}?apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`
const uRSI = `https://api.polygon.io/v1/indicators/rsi/${Stonky}?timespan=day&adjusted=true&window=14&series_type=close&order=desc&apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`
const uCR = `https://api.polygon.io/vX/reference/financials?ticker=${Stonky}&apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`


// console.log(uprice) 
// console.log(uvolume)
// console.log(umktcapnshares)
// console.log(uRSI)
// console.log(uCR)

    $.ajax(uprice)      // grabs the price and price change in %
        .then(response => 
            console.log(response['Global Quote']['05. price'], response['Global Quote']['10. change percent']))       
 
    fetch(uvolume)         // fetch the volume
            .then(response => {
                return response.json();
            })
            .then(data => console.log(data['results']['0']['v']))

    fetch(umktcapnshares)                // fetch the mkt cap
            .then(response => {
                return response.json();
            })
            .then(data => console.log(data['results']['weighted_shares_outstanding'], data['results']['market_cap']))
            
    fetch(uRSI)         // fetch the option open interest
            .then(response => {
                return response.json();
            })
            .then(data => console.log(data['results']['values']['9']['value']))
            
    fetch(uCR)         // fetch the option open interest
            .then(response => {
                return response.json();
            })
            .then(data => console.log(data['results']['0']['financials']['balance_sheet']['current_assets'], 
            data['results']['0']['financials']['balance_sheet']['current_liabilities'], 
            data['results']['0']['financials']['cash_flow_statement']['net_cash_flow_from_operating_activities']));;


const modal = document.querySelector('stonk')  // makes modal an object to open during function of stonk search
function open() {
    document.querySelector('#open')}  // open function 

function close() {

 document.querySelector('#clsoe')  // close function
}

addEventListener('submit', () => {    // trying to open the modal but really not getting this!
    StonkModal.open()
})})




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