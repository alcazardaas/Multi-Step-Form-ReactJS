const performRequest = (method, url, data, successCallback, failureCallback) => {
  fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        successCallback();
      } else {
        failureCallback();
      }
    })
    .catch(error => {
      failureCallback();
    });
};

export default performRequest;
