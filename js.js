console.log('Hello Dr. Big D. Ready to StonkyBvB?')

const $stonkySearch = $('form');      // creates StonkySearch function
$stonkySearch.on('submit', event => {
    event.preventDefault();     // pulls $tonky $earch field and prevents wild refresh


const formData = new FormData(event.target);  // creates new variable from $stonkySearch for $tonky

const Stonky = formData.get('stonky')

const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${Stonky}&apikey=AESWZAZ89MXTH2XK`
const url2 = `https://api.polygon.io/v2/aggs/ticker/${Stonky}/range/1/day/2023-01-09/2023-01-09?apiKey=HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn`

console.log(url) 
console.log(url2)

    $.ajax(url)
        .then(response => 
            console.log(response)
        )

    fetch(url2)
            .then(response => {
                return response.json();
            })
            .then(data => console.log(data))

})



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