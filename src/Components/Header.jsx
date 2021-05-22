import React from 'react';

function Header() {
  return (
    <header className="header page__header">
      <a href="./index.html" className="header__logo">наставники.про</a>
      <nav className="navigation navigation_place_header">
        <ul className="navigation__links navigation__links_place_header">
          <li className="navigation__list">
            <a
              href="./calendar.html"
              className="navigation__link navigation__link_place_header"
            >
              календарь
            </a>
          </li>
          <li className="navigation__list">
            <a href="./places.html" className="navigation__link navigation__link_place_header">
              куда
              пойти
            </a>
          </li>
          <li className="navigation__list">
            <a href="/#" className="navigation__link navigation__link_place_header">вопросы</a>
          </li>
          <li className="navigation__list">
            <a href="/#" className="navigation__link navigation__link_place_header">читать и смотреть</a>
          </li>
          <li className="navigation__list">
            <a href="/#" className="navigation__link navigation__link_place_header">права детей</a>
          </li>
          <li className="navigation__list">
            <a href="/#" className="navigation__link navigation__link_place_header">истории</a>
          </li>
        </ul>
      </nav>
      <button type="button" className="header__search" />
      <div className="header__divisor" />
      <button type="button" className="header__account" />
      <button type="button" className="header__menu" />
    </header>
  );
}

export default Header;
