import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import { withRouter } from "react-router";

function TopMenu(props) {
  const { location: { pathname }, user: { name } } = props;

  return (
    <Fragment>
      <Menu>
        <Menu.Item name='map' active={pathname === '/map'}>
          <Link to="/map">Карта</Link>
        </Menu.Item>

        <Menu.Item name='profile' active={pathname === '/profile'}>
          <Link to="/profile">Профиль</Link>
        </Menu.Item>

        <Menu.Item name='home' active={pathname === '/'}>
          <Link to="/">Главная</Link>
        </Menu.Item>

        <Menu.Item position='right' name={name} >
          {/* <Menu.Item name={name} /> */}
          <button>CLICK</button>
        </Menu.Item>

      </Menu>
    </Fragment>
  );
}
export default withRouter(TopMenu);
