// Nav.js

import { NavButton } from '../common/NavButton';
import { Cart } from '../views/Cart';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { SpaList } from '../views/SpaList';

const navItems = [
  { name: 'Home', component: Home },
  { name: 'Rooms', component: RoomList },
  { name: 'SPA', component: SpaList },
  { name: '🛒', component: Cart },
  

];

export function Nav() {
  const nav = document.createElement('nav');

  const navButtons = navItems.map(navItem => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });

  nav.append(...navButtons);

  return nav;
}