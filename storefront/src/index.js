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

  constructor(props) {
    super(props);
    this.state = {countries: []};
  }

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
    var that = this;

    this.getJSON('http://services.groupkt.com/country/get/all')
    .then(function(response) {
      console.log(response.RestResponse.result.length);
      console.log(response);
      that.setState({countries:response.RestResponse.result});

    }).catch(function(err) {
      // Error :(
      console.log(err);
      that.setState({countries:[]});
    });
  }

  renderRow() {

    var rows = this.state.countries.map(function(element) {
      return (
            <tr key={element.alpha3_code}>
              <td>{element.name}</td>
              <td>{element.alpha2_code}</td>
              <td>{element.alpha3_code}</td>
            </tr>
          );
    });

    // return (<tr>
    //   <td></td>
    //   <td></td>
    //   <td></td>
    // </tr>);

    return rows;
  }

  render() {
    return (
      <div className="shopping-list">
        <h1>Product List</h1>
        <table>
          <thead>
            <tr>
              <td>Country Name</td>
              <td>Alpha 2</td>
              <td>Alpha 3</td>
            </tr>
          </thead>
          <tbody>
                {this.renderRow()}
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
