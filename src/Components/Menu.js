import { NavLink, Route } from "react-router-dom";
import { Component } from "react";
import React from "react";

const menus = [
  {
    label: 'Trang chu',
    to: '/',
    exact: true
  },
  {
    label: 'Gioi thieu',
    to: '/about',
    exact: false
  },
  {
    label: 'Lien he',
    to: '/contact',
    exact: false
  },
  {
    label: 'San pham',
    to: '/products',
    exact: false
  },
  {
    label: 'Dang nhap',
    to: '/login',
    exact: false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active' : '';

      return (
        <div className={active}>
          <NavLink to={to} className="btn btn-primary">{label}</NavLink>
        </div>
      )
    }} />
  )
}
class Menu extends Component {
  render() {
    return (
      <div>
        <div className="btn-group">
          {menus.map((menu, index) => {
           return <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact} />
          })};

          {/*<MenuLink label='Trang chu' to='/' activeOnlyWhenExact={true} />
          <MenuLink label='Gioi thieu' to='/about' activeOnlyWhenExact={false} />
          <MenuLink label='Lien he' to='/contact' activeOnlyWhenExact={false} />*/}

          {/*<NavLink to='/' exact className="btn btn-primary">Trang chu</NavLink>
          <NavLink to='/about' className="btn btn-primary">Gioi thieu</NavLink>
          <NavLink to='/contact' className="btn btn-primary">Lien he</NavLink>*/}
        </div>
      </div>
    );
  }
}

export default Menu;
