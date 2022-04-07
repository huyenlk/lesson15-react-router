import { Component } from 'react/cjs/react.production.min';

class Product extends Component {
  render() {

    var match = this.props;
    var name = match.match.params.name

    console.log(name);

    return (
      <div>
        San pham: {name}
      </div>
    );
  }
}

export default Product;
