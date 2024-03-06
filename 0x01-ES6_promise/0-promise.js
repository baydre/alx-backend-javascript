/* eslint-disable no-constant-condition */
/* eslint-disable */
export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    if (true) {
      resolve('works!');
    } else {
      reject(Error('broken'));
    }
  });
  return promise;
}
