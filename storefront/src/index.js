import React from 'react';
import ReactDOM from 'react-dom';
import URLUtils from './URLUtils';
import ProductTable from './ProductTable';
import './index.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {products: []};
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
  }

  render() {
    return (
      <div>
        <ProductTable products={this.state.products}/>
      </div>
    );
  }
}

// ========================================

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
