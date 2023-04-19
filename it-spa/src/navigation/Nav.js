// Nav.js

import { NavButton } from '../common/NavButton';
import { Cart } from '../views/Cart';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { SpaList } from '../views/SpaList';
import { Login } from '../authorization/Login';
import { Reservation } from '../views/Reservation';



const navItems = [
  { name: 'Home', component: Home },
  { name: 'Rooms', component: RoomList },
  { name: 'SPA', component: SpaList },
  { name: '🛒', component: Cart },
  { name: 'Reservation', component: Reservation },
  { name: 'Login', component: Login },
  

];

export function Nav() {
  const nav = document.createElement('nav');

  const img = document.createElement('img');
	img.src = require('../assets/Logo.png');
	img.style.width = '8vw';

  const navButtons = navItems.map(navItem => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });



  nav.append(img,...navButtons);

  return nav;
}

