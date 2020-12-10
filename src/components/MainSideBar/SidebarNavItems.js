import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'shards-react';

export const SidebarNavItems = ({ menuVisible = false }) => {
  const items = [
    {
      title: 'Dashboard',
      to: '/home',
      icon: 'home',
    },
    {
      title: 'Add Products',
      to: '/products',
      icon: 'dns',
    },
    {
      title: 'Products',
      to: '/shop',
      icon: 'category',
    },
    {
      title: 'Account',
      to: '/accountdetail',
      icon: 'account_box',
    },
  ];
  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {items.map(item => (
          <NavItem key={item.title}>
            <NavLink tag={RouteNavLink} to={item.to}>
              <div className="d-inline-block item-icon-wrapper">
                <i className="material-icons">{item.icon}</i>
              </div>

              {item.title && <span>{item.title}</span>}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};
