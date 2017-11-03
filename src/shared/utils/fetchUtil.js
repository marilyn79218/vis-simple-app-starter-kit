const API_HOST = process.env.VIS_API_HOST;

const genTokenHeader = token => (
  token ?
    {
      'Content-Type': 'application/json',
    } :
    {}
);

const removeContentType = headers => {
  const {
    'Content-Type': contentType, // eslint-disable-line no-unused-vars
    ...rest
  } = headers;

  return rest;
};

const optionsBuilder = method => (body, header) => (
  body ?
    {
      method: method.toUpperCase(),
      headers: {
        ...header,
        ...genTokenHeader(),
      },
      body: JSON.stringify(body),
    } :
    {
      method: method.toUpperCase(),
      headers: removeContentType(
        {
          ...header,
          ...genTokenHeader(),
        }
      ),
    }
);

const checkStatus = handle401 => response => {
  if (response.status === 401) {
    return handle401();
  }

  if (response.status === 204) {
    return {};
  }

  return response.json()
    .then(json => {
      if (json.response_code === 1 || response.status === 200) {
        return Promise.resolve(json);
      } else {
        return Promise.reject(json);
      }
    });
};

const wrappedFetch = endpoint => (method, body, header) =>
  fetch(
    `${API_HOST}${endpoint}`,
    optionsBuilder(method)(body, header)
  )
    .then(checkStatus(() => {}));

const allowedMethod = [
  'get',
  'post',
  'patch',
];

const fetchUtil = endpoint => allowedMethod.reduce(
  (pV, cV) => ({
    ...pV,
    [cV]: ({ body, headers } = {}) => wrappedFetch(endpoint)(cV, body, headers)
  })
  , {}
)

export default fetchUtil;
