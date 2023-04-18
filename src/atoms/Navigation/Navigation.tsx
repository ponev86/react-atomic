import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Paths } from 'src/constants';

import './Navigation.scss';

const Navigation: FC = () => {
  const linkStyles = ({ isActive }: { isActive: boolean }) => classNames('nav__link', { nav__link_active: isActive });
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to={Paths.home} className={linkStyles}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to={Paths.signIn} className={linkStyles}>
            Авторизация
          </NavLink>
        </li>
        <li>
          <NavLink to={Paths.private} className={linkStyles}>
            Private
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
