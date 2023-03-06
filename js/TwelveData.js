const request = require('request');
let TDKEY = "3e4a4a03b60a43c8a84514053e1b5df5";


async function CurrentPrices(tickers) {

	return await new Promise((resolve, reject) => {
		let tdurl = 'https://api.twelvedata.com/price?symbol=' + tickers.toString() + '&apikey=' + TDKEY;

		request.get({
			url: tdurl,
			json: true,
			headers: { 'User-Agent': 'request' }
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
			}
			else if (res.statusCode !== 200) {
				console.log('Status:', res.statusCode);
			}
			else {
				let reformattedDatta = {};
				if (tickers.length == 1) {
					let key = tickers[0];
					reformattedDatta[key] = parseFloat(data.price);
				}
				else if (tickers.length > 1) {
					for (let key in data) {
						reformattedDatta[key] = parseFloat(data[key].price);
					}
				}
				resolve(reformattedDatta);
				// console.log(reformattedDatta["IBM"]);
			}
		});
	});
}

async function MyTestFunction()
{
	let search = await CurrentPrices(["NYMEX:CL1!"]);
	// let SPXprice = search["SPX"];
	let CL1price = search["NYMEX:CL1!"];
	console.log(CL1price);
}
MyTestFunction(); //to be used for single use of code

// setInterval(MyTestFunction, 60000) //to be used to get the price once every 60 seconds (only have 8 requests per minute)


