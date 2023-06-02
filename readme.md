# PROJECT 1 - StonkyBvB

Utilize an API to open up a stock quote and pull certain information such as:
1. Previous Day Price Close**DONE**
2. Volume **DONE**
3. Market Capitalization **DONE**
4. Shares Outstanding **DONE** 
5. RSI **DONE**
6. Current Assets & Current Liabilities for determining Current Ratio **DONE**
7. Net Cash Flow from Operating Activities **DONE**

Build and implement an algorythm to rate a 'bull vs. bear' outcome/rating. This is used to determine which GIF/Pic is displayed using and If/Else statement. 

The General concept of StonkyBvB.com is that you place an inquary for a stock ticker and receive certain data in a results message. The user then has the option to ask the StonkyBvB Magic-8-Ball wheather to be Bullish or Bearish on the Stonk.

## WIREFRAME & SITE HOSTING

Linke to Wireframe on Figma:
https://www.figma.com/file/qf0DSj6xvkpWLowE1e5Hnw/Untitled?type=design&node-id=0%3A1&t=OqogklxcrnHCWRPV-1


Site hosted @:
https://stonkybvb.onrender.com/




### Milestones & Goalzzzz!

- **DONE** Complete the Milestone and Goalzzzzz layout.
- **DONE LINK ABOVE** Build initial wireframe for the application.
- **DONE API LINK BELOW and on js.js** 3/26 Determine the API in order to determine bull vs bear.
- **DONE NEED TO USE MULTIPLE API CALLS FOR DATA, MAY ADJUST DATA CALLS**  Build framework and ensure data can be used without error with API.
- **DONE** Implement ALGO (I used routinely in my original trading days) for BvB if else statement for redirection to Bull or Bear Page.
- **DONE** Design HTML pages for Bull and Bear inlie with Wireframe design.
- **NO IDEA IF THIS WAS DONE RIGHT BUT LOOKING FORWARD TO TESTING IT, CONSULSTED THE INTERENT A LOT TO WRITE THE CODE, CHAT GPT WAS HELPFUL** Build out transition of shaking BvB 8-ball.
- **DONE** test the app out and share with friends for first feedback.
- **DONE** create take me back buttons on bull v bear
- **DONE** Ensure the contents of the list are cleared on a "nah" or a new "see the data"
- **DONE** make the 8 ball dance!
- **DONE** update based on feedback sample. 
- **DONE** prepare to present
- 6/3 present and ask for feedback for the next itteration of StonkyBvB




## Notes from instructor time:
- (Kyle) Use model as it will be better than an alert feature
- (Kyle) update the wire framing.
- (Alex) Project approved, agrees to keep it simple with the API use.
    Note: Yahoo, seems to  have ceased offering the free API to their data, this is suprising and now I am looking to find another API to use. 
     - API Key Polygon: HMKHCCgqWLvu_C9a8aiprQNGVLIgZxvn
        - limited to 5 calls per minute, for the project purpose this may be reasonable?

        I found a free open source API though so going to go this method it is unlimited use:
        pip install yfinance (appears to be a python api, this may be more valuable for the next iteration.)

        - Welcome to Alpha Vantage! Your dedicated access key is: AESWZAZ89MXTH2XK. Please record this API key at a safe place for future data access.

        - I got a ton of help on the one on one during Wednesday class, this should afford me the help to wrap the project up with plenty of time for testing and feedback... one of the highlights is that I have paid for said API access through polygon and we had a discussion on how I may want to change the key after presenting so it isnt readily available to others, however soon will learn how to use the key in the backend to protect that data from public display.