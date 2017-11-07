# Recogemo

## Description
Recognition Demo

## scripts
```sh
# start to develop
VIS_API_HOST="your.api.host" yarn start

# build bundle
VIS_API_HOST="your.api.host" yarn release

# lint
yarn lint

# test
yarn test
```

## Fetch
this project use `whatwg-fetch` as fetch polyfill

### How
```js
import fetchUtil from 'shared/utils/fetchUtil';

const endpoint = '/books';
const fetchBooks = fetchUtil(endpoint);

fetchBooks.get()
  .then(console.log); // GET /books response

fetchBooks.post({
  body: {
    ids: [1, 2, 3],
  },
  headers: {
    user: 1,
  },
})
  .then(console.log);

```

todo:
