// SpaList.js

import { SpaDetails } from './SpaDetails';
import { NavButton } from '../common/NavButton';
import { cartManager } from '../cart/cart-manager';

export function SpaList() {
	const section = document.createElement('section');
	const ul = document.createElement('ul');

	section.innerHTML = `
    <h2 class="text-center>"Lista zabiegów SPA</h2>
    <p class="text-center">Sprawdź ofertę naszych zabiegów.</p>
    <p class="loading">Ładuję listę zabiegów...</p>
    <div class="spa-list"></div>
  `;

	// pobieramy liste pokoi z serwera
	fetch('http://localhost:3000/treatments')
		.then((response) => response.json())
		.then((treatments) => {
			const lis = treatments.map((treatment) => {
				const type = 'spaList';
				const li = document.createElement('li');

				li.innerHTML = `
            <h4>${treatment.name}</h4>
            <p>
            <strong>Miejsce: ${treatment.area}</strong>
            </p>
            <p>
              <strong>${treatment.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

				const addToCartButton = document.createElement('button');
				addToCartButton.innerText = 'Dodaj do koszyka';
				addToCartButton.classList.add('btn');
				addToCartButton.addEventListener('click', () =>
					cartManager.addItem(treatment)
				);
				const detailsButton = NavButton(
					'Zobacz więcej...',
					() => SpaDetails(treatment.id),
					['btn']
				);

				li.querySelector('footer').append(addToCartButton, detailsButton);

				return li;
			});

			ul.append(...lis);

			// usuwamy element mowiacy o ladowaniu
			section.querySelector('.loading').remove();
			// podstawiamy gotowa liste z pokojami
			section.querySelector('.spa-list').append(ul);
		});

	return section;
}
