# PROJECT 1 - StonkyBvB

Utilize an API to open up a stock quote and pull certain information such as:
1. Price
2. Average Trading Volume(10D)
3. Market Capitalization
4. Shares Outstanding
5. Option Open Interest

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
-/3/27 Implement ALGO (I use routinely) for BvB if else statement for redirection to Bull or Bear Page.
- **DONE** Design HTML pages for Bull and Bear inlie with Wireframe design.
- **NO IDEA IF THIS WAS DONE RIGHT BUT LOOKING FORWARD TO TESTING IT, CONSULSTED THE INTERENT A LOT TO WRITE THE CODE, CHAT GPT WAS HELPFUL** Build out transition of shaking BvB 8-ball.
- 3/30 test the app out and share with friends for first feedback.
- 3/31 update based on feedback sample. 







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