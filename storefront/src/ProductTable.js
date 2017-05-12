
import React from 'react';

export default class ProductTable extends React.Component {

    renderProductRows() {
        var rows = this.props.products.map(function(element) {
          return (
            <div className="row" key={element.name}>
              <div className="cell">{element.name}</div>
              <div className="cell">{element.price}</div>
              <div className="cell">{element.barCode}</div>
            </div>
          );
        });

        return rows;
    }

    render() {
        console.log('this.props', this.props.products);
        return (
          <div className="wrapper">

            <div className="table">
              <div className="row header">
                  <div className="cell">Nombre</div>
                  <div className="cell">Codigo</div>
                  <div className="cell">Precio</div>
              </div>

              {this.renderProductRows()}

            </div>
          </div>
        );
    }
}