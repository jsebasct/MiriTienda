

export default class URLUtils {
    /**
    * XHR wrapped in a promise.
    * @param  {String} url - The URL to fetch.
    * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
    */
    static get(url) {
        return fetch(url, {
          method: 'get'
        });
    }

    /**
    * Performs an XHR for a JSON and returns a parsed JSON response.
    * @param  {String} url - The JSON URL to fetch.
    * @return {Promise}    - A promise that passes the parsed JSON response.
    */
    static getJSON(url) {
        return this.get(url).then(function(response) {
          return response.json();
        });
    }
}