import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Board from './Board';


// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

class ShoppingList extends React.Component {

  /**
   * XHR wrapped in a promise.
   * @param  {String} url - The URL to fetch.
   * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
   */
  get(url) {
    return fetch(url, {
      method: 'get'
    });
  }

  /**
   * Performs an XHR for a JSON and returns a parsed JSON response.
   * @param  {String} url - The JSON URL to fetch.
   * @return {Promise}    - A promise that passes the parsed JSON response.
   */
  getJSON(url) {
    return this.get(url).then(function(response) {
      return response.json();
    });
  }

  componentDidMount() {
    this.getJSON('http://services.groupkt.com/country/get/all')
    .then(function(response) {
      console.log(response.RestResponse.result.length);
      console.log(response);

    }).catch(function(err) {
      // Error :(
      console.log(err);
    });
  }

  render() {
    return (
      <div className="shopping-list">
        <h1>Product List</h1>
        <table>
          <tbody>
            <tr>
              <td>Instagram</td>
            </tr>
            <tr>
              <td>WhatsApp</td>
            </tr>
            <tr>
              <td>Oculus</td>
            </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <ShoppingList />,
  document.getElementById('root')
);
