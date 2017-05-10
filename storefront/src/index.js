import React from 'react';
import ReactDOM from 'react-dom';
import URLUtils from './URLUtils';
import './index.css';


class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {countries: [], products: []};
  }

  componentDidMount() {
    var that = this;

    URLUtils.getJSON('http://localhost:8080/api/products')
    .then(function(response) {
      console.log("Response Productos:", response);
	  
	  that.setState({products: response._embedded.prod});
    }).catch(function(error) {
      console.log(error);
    });

	/*
    URLUtils.getJSON('http://services.groupkt.com/country/get/all')
    .then(function(response) {
      console.log("Paises", response.RestResponse.result.length);
      console.log(response);
      that.setState({countries:response.RestResponse.result});

    }).catch(function(err) {
      // Error :(
      console.log(err);
      that.setState({countries:[]});
    });
	*/
  }
  
  renderProductRows() {
    var rows = this.state.products.map(function(element) {
      return (
            <tr key={element.alpha3_code}>
              <td>{element.name}</td>
              <td>{element.price}</td>
              <td>{element.barCode}</td>
            </tr>
          );
    });

    return rows;
  }
  
  renderCountryRows() {
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
              <td>Nombre</td>
              <td>Codigo</td>
              <td>Precio</td>
            </tr>
          </thead>
          <tbody>
                {this.renderProductRows()}
          </tbody>
        </table>
        <h1>Country List</h1>
        <table>
          <thead>
            <tr>
              <td>Country Name</td>
              <td>Code Alpha 2</td>
              <td>Code Alpha 3</td>
            </tr>
          </thead>
          <tbody>
                {this.renderCountryRows()}
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
