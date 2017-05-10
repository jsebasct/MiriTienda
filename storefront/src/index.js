import React from 'react';
import ReactDOM from 'react-dom';
import URLUtils from './URLUtils';
import './index.css';


class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {countries: []};
  }

  componentDidMount() {
    var that = this;

    URLUtils.getJSON('http://localhost:8080/api/products')
    .then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });

    URLUtils.getJSON('http://services.groupkt.com/country/get/all')
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
              <td>Code Alpha 2</td>
              <td>Code Alpha 3</td>
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
