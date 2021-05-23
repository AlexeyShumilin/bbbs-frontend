import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header page__header">
      <Link to="/" className="header__logo">наставники.про</Link>
      <nav className="navigation navigation_place_header">
        <ul className="navigation__links navigation__links_place_header">
          <li className="navigation__list">
            <Link
              to="/calendar"
              className="navigation__link navigation__link_place_header"
            >
              календарь
            </Link>
          </li>
          <li className="navigation__list">
            <Link to='/place' className="navigation__link navigation__link_place_header">
              куда
              пойти
            </Link>
          </li>
          <li className="navigation__list">
            <Link to="/questions" className="navigation__link navigation__link_place_header">вопросы</Link>
          </li>
          <li className="navigation__list">
            <Link to="/read-and-watch" className="navigation__link navigation__link_place_header">читать и смотреть</Link>
          </li>
          <li className="navigation__list">
            <Link to="/for-kids" className="navigation__link navigation__link_place_header">права детей</Link>
          </li>
          <li className="navigation__list">
            <Link to="/stories" className="navigation__link navigation__link_place_header">истории</Link>
          </li>
        </ul>
      </nav>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="header__search" />
      <div className="header__divisor" />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="header__account" />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="header__menu" />
    </header>
  );
}

export default Header;
