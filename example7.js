const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
// Requires 'npm install node-fetch';
const fetch = require('node-fetch');

function* createQuoteFetcher() {
  const response = yield fetch(url);
  const quote = yield response.json();
  return `${quote.quoteText} -${quote.quoteAuthor}`;
}

const quoteFetcher = createQuoteFetcher();

// The first 2 then statements essentially wait for the right side of the generator to resolve, and then pass the value back into the generator to the left side.
quoteFetcher.next().value  // pauses at the first yield and returns a promise
  .then(res => quoteFetcher.next(res).value) // executes once the first yield returns a resolved promise and passes its value back to the yield and assigns it to the response variable and continues executing the second yield
  .then(res => quoteFetcher.next(res).value)
  .then(quote => console.log(quote))
  .catch(err => console.log(err))
