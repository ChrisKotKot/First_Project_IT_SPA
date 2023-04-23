import { createEl } from '../common/createEl';
import { MyNAvi } from '../common/MyNAvi';
import { Register } from '../views/Register';

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
      <div class="text-center caption">
    <h1>Witaj w IT SPA!</h1>
   <a class="btn btn-outline-secondary btn-lg" href="#course">Przejdź do SPA!</a>
  </div>
      </div>
    </div>
    <div class="car car2 carousel-item data-bs-interval="2000"">
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="car car3 carousel-item data-bs-interval="3000"">
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>     
</div>


  
    `;

	const img1 = document.createElement('img');
	img1.classList.add('d-block', 'w-100');
	img1.src = require('../assets/2.jpg');

	const div1 = section.querySelector('.car1');
	div1.append(img1);

	const img2 = document.createElement('img');
	img2.classList.add('d-block', 'w-100');
	img2.src = require('../assets/3.jpg');

	const div2 = section.querySelector('.car2');
	div2.append(img2);

	const img3 = document.createElement('img');
	img3.classList.add('d-block', 'w-100');
	img3.src = require('../assets/4.jpg');

	const div3 = section.querySelector('.car3');
	div3.append(img3);

	const course = createEl('div', [], { id: 'course' });
	course.innerHTML = `
  <div id="course">
          <div class="text-center col-12">
            <p>Test</p>
            <a class="btn btn-secondary btn-md" href="https://www.google.pl" target="_blank">Więcej</a>
          </div>
          <div id="features">
		<div class="jumbotron text-center">
			<h2>Poznaj naszą ofertę!</h2>
			<ul class="features-list">
				<li>Hotel</li>
          <p>Hotel ten to prawdziwa perła wśród hoteli. Zbudowany w nowoczesnej i pięknej architekturze, urzeka swoim wyglądem już od pierwszego wejrzenia. Wnętrza są utrzymane w stylu minimalistycznym, co nadaje im elegancji i nowoczesności.

          Jednak prawdziwą perełką hotelu jest jego spa. Wspaniałe miejsce do relaksu i odprężenia, gdzie można skorzystać z szerokiej gamy zabiegów, masaży oraz innych form relaksu. Wybitne spa jest jednym z największych atutów tego hotelu i stanowi idealne miejsce na relaks dla każdego, kto chce odpocząć od zgiełku codzienności.
          
          Ale to nie wszystko. Hotel posiada również wspaniałą restaurację, która serwuje wyśmienite jedzenie. Szef kuchni skupia się na sezonowych składnikach i zawsze stara się wykorzystać najwyższej jakości produkty, aby stworzyć wspaniałe i smaczne dania. Restauracja jest idealnym miejscem na romantyczną kolację czy spotkanie z przyjaciółmi.
          
          Poza tym hotel oferuje również luksusowe pokoje i apartamenty, które są urządzone w nowoczesnym stylu i wyposażone we wszystkie niezbędne udogodnienia. Zadbano o każdy detal, aby goście czuli się jak w domu.
          
          W sumie, ten hotel z piękną nowoczesną architekturą, wybitnym spa i restauracją, jest idealnym miejscem dla osób, które szukają relaksu, spokoju i luksusu w pięknych wnętrzach.</p>
				<li>Nowoczesne SPA</li>
          <p>To najlepsze spa, prawdziwa oaza relaksu i odprężenia, oferująca szeroki wybór zabiegów, takich jak masaże, zabiegi na twarz i ciało, sauny i wiele innych. Wszystkie zabiegi są wykonywane przez wykwalifikowany personel, który zadba o to, aby każdy gość poczuł się wyjątkowo i zrelaksowany. Wspaniała atmosfera i wysokiej jakości produkty używane podczas zabiegów sprawiają, że to spa jest jednym z najlepszych w kraju.</p>
			</ul>
			<hr class="line" />
		</div>
	</div>
  </div>
  `;

	const gallery = document.createElement('gallery');

	gallery.innerHTML = `


  `;

	const img7 = document.createElement('img');
	img7.src = require('../assets/7.png');
	img7.style.width = '50vw'; // vw = view width

	const img8 = document.createElement('img');
	img8.src = require('../assets/6.jpg');
	img8.style.width = '50vw'; // vw = view width

	// const div7 = gallery.querySelector('.xx7');
	// div7.append(img7);

	// const div8 = gallery.querySelector('.xx8');
	// div8.append(img8);

	gallery.append(img7, img8);

	const resour = createEl('div', [], { id: 'resour' });
	resour.innerHTML = `

  <div id="resour">
  <div class="jumbotron">
    <div class="narrow">
      <div class="heading col-12">
        <h3 class="text-center">Zalety hotelu:</h3>
      </div>

      <div class="row text-center">
        <div class="col-lg-3">
          <div class="resource">
            <i class="fab fa-js-square fa-3x"></i>
            <h2>18+</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate officiis
              expedita eaque optio sit odit saepe vel quisquam voluptatum quae consequuntur natus
              ducimus tenetur officia suscipit dolorem, corrupti ab.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="resource">
            <i class="fas fa-terminal fa-3x"></i>
            <h2>Otoczony lasem</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate officiis
              expedita eaque optio sit odit saepe vel quisquam voluptatum quae consequuntur natus
              ducimus tenetur officia suscipit dolorem, corrupti ab.</p>
          </div>	
        </div>
        <div class="col-lg-3">
          <div class="resource">
            <i class="fab fa-btc fa-3x"></i>
            <h2>Nad jeziorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate officiis
              expedita eaque optio sit odit saepe vel quisquam voluptatum quae consequuntur natus
              ducimus tenetur officia suscipit dolorem, corrupti ab.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="resource">
            <i class="fas fa-seedling fa-3x "></i>
            <h2>Nowoczesny Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate officiis
              expedita eaque optio sit odit saepe vel quisquam voluptatum quae consequuntur natus
              ducimus tenetur officia suscipit dolorem, corrupti ab.</p>
          </div>
      </div>
    </div>
  </div>
</div>
`;

	const clients = createEl('div', [], { id: 'clients' });
	clients.innerHTML = `

<div id="clients">
		<div class="jumbotron">
			<div class="heading col-12">
				<h3 class="text-center">Opinie naszych klientów:</h3>
			</div>
			<div class="row text-center">
				<div class="col-md-4">
					<div class="row">
						<div class="col-lg-4 col-sm-4">
							<img class="client" src="img/client2.png" alt="client2">
						</div>
						<div class="col-lg-8 col-sm-8">
							<blockquote class="blockquote text-center">
								<p>Bardzo polecam ten hotel z spa! Wspaniała obsługa, luksusowe pokoje i świetna restauracja. Spa było absolutnie niesamowite - pełne relaksu i odprężenia. Na pewno wrócimy!</p>
							</blockquote>
							<hr class="jumbo-line">
							<footer class="blockquote-footer">
								<cite>Tomasz Baton</cite>
							</footer>
						</div>
					</div>
				</div>
        <div class="col-md-4">
					<div class="row">
						<div class="col-lg-4 col-sm-4">
							<img class="client" src="img/client2.png" alt="client2">
						</div>
						<div class="col-lg-8 col-sm-8">
							<blockquote class="blockquote text-center">
								<p>Byłem w hotelu z spa na weekendowym wypadzie z przyjaciółmi i nie mogliśmy być bardziej zadowoleni. Spa było fantastyczne - masaże i zabiegi były doskonałe, a basen z gorącą wodą był idealny do odpoczynku. Pokoje były przestronne i czyste, a obsługa była bardzo pomocna i przyjazna. Gorąco polecam</p>
							</blockquote>
							<hr class="jumbo-line">
							<footer class="blockquote-footer">
								<cite>Aleksander Pyszka</cite>
							</footer>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class="col-lg-4 col-sm-4">
							<img class="client" src="img/client1.png" alt="client1">
						</div>
						<div class="col-lg-8 col-sm-8">
							<blockquote class="blockquote text-center">
								<p>Spędziliśmy w hotelu z spa kilka dni i byliśmy zachwyceni. Pokoje były pięknie urządzone i bardzo wygodne, a obsługa była bardzo pomocna i przyjazna. Spa było niesamowite - masaże były świetne, a basen z gorącą wodą był idealny do relaksu. Gorąco polecam!!</p>
							</blockquote>
							<hr class="jumbo-line">
							<footer class="blockquote-footer">
								<cite>Karolina Maziewicz</cite>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

	const mapG = createEl('div', [], { id: 'mapG' });
	mapG.innerHTML = `

<!--Google map-->
<div id="map-container-google-3" class="z-depth-1-half map-container-3">
  <iframe src="https://maps.google.com/maps?q=Nowe+Guty&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
    style="border:0" allowfullscreen></iframe>
</div>
`;

	const contact = createEl('div', [], { id: 'contact' });
	contact.innerHTML = `

  <footer>
    <div class="col-12 text-center jumbotron">
      <h3 class="heading">Zadzwoń do nas!</h3>
      <div class="logoContact"></div>
      <p>Lorem ipsum dolor sit amet.</p>
      <strong>Informacje pod numerem 444333222</strong>
      <hr />
      <a href="https://www.youtube.com" target="_blank">
        <i class="fab fa-youtube-square fa-2x"></i>
      </a>
      <a href="https://www.amazon.com" target="_blank">
        <i class="fab fa-amazon fa-2x"></i>
      </a>
      <p>&copy; Copyright by student </p>
    </div>
  </footer>
`;

	const logo = createEl('img', ['logoImgContact']);
	//Sprawdz to
	logo.src = require('../assets/Logo.png');
	const logoImg = contact.querySelector('.logoContact');
	logoImg.append(logo);

	section.append(course, gallery, resour, clients, mapG, contact);

	return section;
}
