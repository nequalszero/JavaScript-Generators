const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
// Requires 'npm install node-fetch';
const fetch = require('node-fetch');

function* createQuoteFetcher() {
  const response = yield fetch(url);
  const quote = yield response.json();
  return `${quote.quoteText} -${quote.quoteAuthor}`;
}

// Recursively calls .next until value returned from yield has { done: true }
// Can avoid writing this by npm installing co (see example 9);
const coroutine = (gen) => {
  const generator = gen();

  const handle = (result) => {
    if (result.done) return Promise.resolve(result.value); // Don't make recursive call if generator is done.
    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)))
  }

  return handle(generator.next());
}

const quoteFetcher = coroutine(createQuoteFetcher);
quoteFetcher.then(quote => console.log(quote));
