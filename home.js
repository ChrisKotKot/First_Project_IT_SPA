import { createEl } from '../common/createEl';

// Home.js
export function Home() {
	const section = document.createElement('section');

	const img = document.createElement('img');
	img.src = require('../assets/support.png');
	img.style.width = '50vw'; // vw = view width

	section.innerHTML = `
    <div id="carouselControls" class="imagesBilboard carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="car car1 carousel-item active data-bs-interval="1000"">
          <div class="carousel-caption d-none d-md-block">
            <h5>Witaj w IT-Spa</h5>
            <p>Najlepsze zabiegi kosmetyczne w regionie</p>
        </div>
      </div>
    </div>
    </div>
     <div>
      <div class="text-center caption">
        <h1>Witaj w IT SPA!</h1>
       <a class="btn btn-outline-secondary btn-lg" href="#course">Przejdź do kursu</a>
      </div>
    </div>
    <p>Każdy programista lubi u nas odpoczywać.</p>
  `;

	const img1 = document.createElement('img');
	img1.classList.add('d-block', 'w-100');
	img1.src = require('../assets/2.jpg');

	const div1 = section.querySelector('.car1');
	div1.append(img1);

	const course = createEl('div', [], { id: 'course' });
	course.innerHTML = `
  <div id="course">
          <div class="text-center col-12">
            <p>Test</p>
            <a class="btn btn-secondary btn-md" href="https://www.google.pl" target="_blank">Więcej</a>
          </div>
  </div>
  `;

	section.append(course);

	return section;
}
