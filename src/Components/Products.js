import { Component } from 'react/cjs/react.production.min';
import { NavLink, Route } from "react-router-dom";
import Product from './Product';

const products = [
  {
    id: 1,
    name: 'apple ip 6s plus 16GB',
    price: 15000000,
    slug: 'apple'
  },
  {
    id: 2,
    name: 'ss galaxy s7',
    price: 10000000,
    slug: 'samsung'
  },
  {
    id: 3,
    name: 'Oppo f1s',
    price: 20000000,
    slug: 'oppo'
  }

];


class Products extends Component {
  render() {
    var { match } = this.props;
    var url = match.url

    var {location}=this.props;
    console.log(location);
    
    return (
      <div style={{ textAlign: 'center', fontSize: '24px' }}>
        Danh sach san pham
        <table className="table table-hover border">
          <tbody>
            {products.map((product, index) => {
              return <tr><NavLink key={index} to={`${url}/${product.slug}`}>{product.id}-{product.name}-{product.price}</NavLink></tr>
            })}
          </tbody>
        </table>
        <div>
          <Route path='/products/:name' component={Product} ></Route>
        </div>
      </div>
    );
  }
}

export default Products;
