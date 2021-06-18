const fetch = require('node-fetch')
const magicString = () => {
    return 'Hello World';
};


const shuffle = async () => {
    const date = new Date().toISOString();

    var stock = [];
    const neweggg = await fetch("https://www.newegg.com/api/common/Lottery")
        const response = (await neweggg.json())
        const obj = await JSON.parse(response);
        console.log(obj)
        obj[0].LotteryItems.forEach(async Stock => {
    
            if(!stock.includes(Stock.Tag)){
                stock.push(Stock.Tag)
                await console.log(Stock.Tag)
            }

        });
       
        return {
            stock: stock,
            fullarray: obj,
            date: date,
        
          };
        
        }
module.exports = {
    magicString,
    shuffle
};