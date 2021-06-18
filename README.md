# Newegg-Shuffle

This is a simple Newegg Shuffle API Package
## Installation

Use the package manager [npm](https://npmjs.org) to install Newegg-Shuffle.

```bash
npm install newegg-shuffle
```

## Usage

```js
const newegg = require('newegg-shuffle')

const apirequest = await newegg.shuffle();

console.log(apirequest)


```
### Response

```js
 stock: [ 'RTX 3060', 'RTX 3070 Ti', 'RTX 3090', 'Xbox', 'RTX 3080' ],
  fullarray: [
    {
      LotteryID: 'b4204274-05cb-4220-aacf-f7a837d647fc',
      LotteryStartDate: '2021-06-17 08:00:00.0',
      LotteryEndDate: '2021-06-17 10:00:00.0',
      LotteryDrawDate: '2021-06-17 11:00:00.0',
      SellingStartDate: '2021-06-17 12:00:00.0',
      SellingEndDate: '2021-06-17 18:00:00.0',
      DrawInterval: '2',
      Description: 'for RTX & Xbox',
      LotteryItems: [Array]
    }
  ],
  date: '2021-06-18T03:05:31.205Z'

```

#### It returns a array of information

Stock: Returns all items currently in shuffle (Auto-Removes duplicates)\
Fullarray: Returns the full Newegg API Array; All timezones are in Newegg HQ Local Time PST.\
Date: Returns the local date to compared to the other dates.

### **All timezones are in Newegg HQ Local Time PST.**

## Disclaimer

All Information in API is provided directly from Newegg Shuffle Endpoint. ```newegg-shuffle``` is in no way affiliated with Newegg.com or any partner brands.




 

## License
[MIT](https://choosealicense.com/licenses/mit/)

<img src="https://cdn.discordapp.com/attachments/837913401048563722/854944011273240586/logofinal.png" align="center" style="width: 10%" />

