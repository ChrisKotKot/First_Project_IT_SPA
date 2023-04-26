import { createEl } from '../common/createEl';
import { MyNAvi } from '../common/MyNAvi';
import { Register } from '../views/Register';
import { RoomList } from './RoomList';

// Home.js
export function Home() {
	const section = document.createElement('section');

	const img = document.createElement('img');
	img.src = require('../assets/support.png');
	img.style.width = '50vw'; // vw = view width

	section.innerHTML = `
	<div>
		<div class="car car1"></div>
		<div class="text-center caption">
	  <h1>Witaj w IT SPA!</h1>
	 <a class="btn btn-success btn-lg" href="#course">Przejdź do SPA!</a>
	</div>
	</div>

    `;
	// const buttonFor = document.createElement('button');
	// buttonFor.classList.add('btn', 'btn-success');
	// buttonFor.innerText = 'button';
	// buttonFor.addEventListener('click', function () {
	// 	MyNAvi(RoomList);
	// });
	// const sectionFor = div.querySelector('.For');
	// sectionFor.append(buttonFor);

	const img1 = document.createElement('img');
	img1.classList.add('d-block', 'w-100');
	img1.src = require('../assets/2.jpg');

	const div1 = section.querySelector('.car1');
	div1.append(img1);

	const course = createEl('div', [], { id: 'course' });
	course.innerHTML = `
  <div id="course">
          <div id="features">
		<div class="jumbotron text-center">
			<h2>Poznaj naszą ofertę!</h2>
			<ul class="features-list">
				<li><h4>Hotel</h4></li>
          <p>Hotel ten to prawdziwa perła wśród hoteli. Zbudowany w nowoczesnej i pięknej architekturze, urzeka swoim wyglądem już od pierwszego wejrzenia. Wnętrza są utrzymane w stylu minimalistycznym, co nadaje im elegancji i nowoczesności.

          Jednak prawdziwą perełką hotelu jest jego spa. Wspaniałe miejsce do relaksu i odprężenia, gdzie można skorzystać z szerokiej gamy zabiegów, masaży oraz innych form relaksu. Wybitne spa jest jednym z największych atutów tego hotelu i stanowi idealne miejsce na relaks dla każdego, kto chce odpocząć od zgiełku codzienności.
          
          Ale to nie wszystko. Hotel posiada również wspaniałą restaurację, która serwuje wyśmienite jedzenie. Szef kuchni skupia się na sezonowych składnikach i zawsze stara się wykorzystać najwyższej jakości produkty, aby stworzyć wspaniałe i smaczne dania. Restauracja jest idealnym miejscem na romantyczną kolację czy spotkanie z przyjaciółmi.
          
          Poza tym hotel oferuje również luksusowe pokoje i apartamenty, które są urządzone w nowoczesnym stylu i wyposażone we wszystkie niezbędne udogodnienia. Zadbano o każdy detal, aby goście czuli się jak w domu.
          
          W sumie, ten hotel z piękną nowoczesną architekturą, wybitnym spa i restauracją, jest idealnym miejscem dla osób, które szukają relaksu, spokoju i luksusu w pięknych wnętrzach.</p>
		  <div class="hotelimg"></div>
				<li><h4>Nowoczesne SPA</h4></li>
          <p>To najlepsze spa, prawdziwa oaza relaksu i odprężenia, oferująca szeroki wybór zabiegów, takich jak masaże, zabiegi na twarz i ciało, sauny i wiele innych. Wszystkie zabiegi są wykonywane przez wykwalifikowany personel, który zadba o to, aby każdy gość poczuł się wyjątkowo i zrelaksowany. Wspaniała atmosfera i wysokiej jakości produkty używane podczas zabiegów sprawiają, że to spa jest jednym z najlepszych w kraju.</p>
		  <section class="hotelimg1"></section>
			</ul>
		</div>
	</div>
  </div>
  `;

	// 	const gallery = document.createElement('gallery');

	// 	gallery.innerHTML = `

	//   `;

	const img7 = document.createElement('img');
	img7.src = require('../assets/7.png');
	img7.style.width = '50vw'; // vw = view width

	const img8 = document.createElement('img');
	img8.src = require('../assets/6.jpg');
	img8.style.width = '50vw'; // vw = view width

	const sectionHotelImage = course.querySelector('.hotelimg');
	sectionHotelImage.append(img7, img8);

	const img10 = document.createElement('img');
	img10.src = require('../assets/3.jpg');
	img10.style.width = '50vw'; // vw = view width

	const img9 = document.createElement('img');
	img9.src = require('../assets/4.jpg');
	img9.style.width = '50vw'; // vw = view width

	const sectionHotelImage1 = course.querySelector('.hotelimg1');
	sectionHotelImage1.append(img9, img10);

	// gallery.append(img7, img8);

	const resour = createEl('div', [], { id: 'resour' });
	resour.innerHTML = `

  <div id="resour">
  <div class="jumbotron">
    <div class="narrow">
      <div class="heading col-12">
	  <ul>
	 <li> <h4 class="text-center">Zalety hotelu:
	 </li> 
	  </ul>
        
      </div>

      <div class="row text-center">
        <div class="col-lg-3">
          <div class="resource">
            <i class="fab fa-js-square fa-3x"></i>
            <h2>18+</h2>
            <p>Hotel dla osób pełnoletnich może być dobrym wyborem dla grupy przyjaciół lub par, które szukają miejsca do relaksu i zabawy bez obawienia się o przeszkadzanie innym gościom.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="resource">
            <i class="fas fa-terminal fa-3x"></i>
            <h2>Otoczony lasem</h2>
            <p>Hotel położony w lesie może oferuje piękne widoki na naturę oraz ciszę i spokój, co jest idealne dla osób, które szukają wypoczynku z dala od miejskiego zgiełku.Zapewniamy gościom możliwość aktywnego spędzenia czasu na świeżym powietrzu, np. poprzez organizację pieszych wycieczek lub przejażdżek rowerowych po okolicy.</p>
          </div>	
        </div>
        <div class="col-lg-3">
          <div class="resource">
            <i class="fab fa-btc fa-3x"></i>
            <h2>Nad jeziorem</h2>
            <p>Hotel nad jeziorem to idealne miejsce na spędzenie wakacji dla osób, które lubią aktywny wypoczynek na świeżym powietrzu, np. wędkowanie, pływanie, kajakarstwo lub jazdę na rowerze.</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="resource">
            <i class="fas fa-seedling fa-3x "></i>
            <h2>Nowoczesny Design</h2>
            <p>Doskonałe miejsce dla osób ceniących sztukę i design, dzieła sztuki oraz innowacyjne rozwiązania, przyciągają uwagę i inspirują do refleksji.</p>
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
		<ul>
	 <li> <h4 class="text-center">Opinie naszych klientów:
	 </li> 
	  </ul>
			
			</div>
			





			<div class="row text-center">
				<div class="col-md-4">
					<div class="row rowclient">
						<div id=client1 class="col-lg-4 col-sm-4">
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
					<div class="row rowclient">
						<div id=client2 class="col-lg-4 col-sm-4">
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
					<div class="row rowclient">
						<div id=client3 class="col-lg-4 col-sm-4">
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
	const imgClient1 = createEl('img', ['client']);
	const imgClient2 = createEl('img', ['client']);
	const imgClient3 = createEl('img', ['client']);

	imgClient1.src = require('../assets/client1.jpg');
	imgClient2.src = require('../assets/client2.jpg');
	imgClient3.src = require('../assets/client3.jpg');

	const client1Div = clients.querySelector('#client1');
	const client2Div = clients.querySelector('#client2');
	const client3Div = clients.querySelector('#client3');

	client1Div.append(imgClient1);
	client2Div.append(imgClient2);
	client3Div.append(imgClient3);

	const mapG = createEl('div', [], { id: 'mapG' });
	mapG.innerHTML = `

<!--Google map-->
<ul>
	 <li> <h4 class="text-center">Zobacz nasz hotel i okolice na mapie!
	 </li> 
	  </ul>
<div id="map-container-google-3" class="z-depth-1-half map-container-3">
  <iframe src="https://maps.google.com/maps?q=Nowe+Guty&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
    style="border:0" allowfullscreen></iframe>
</div>
`;

	const contact = createEl('div', [], { id: 'contact' });
	contact.innerHTML = `

  <footer>
    <div class="col-12 text-center jumbotron">
      <div class="logoContact"></div>
	  <a class="btn btn-success btn-xlg" href="tel:713-992-0916" style="padding:20px;background-color:rgba(36,61,24,1)">
   Zadzwoń do nas!
</a>
      <p>Recepcja czynna 24/7</p>
      <strong>Informacje pod numerem 48 700 000 999</strong>
      <hr />
      <a href="https://www.youtube.com" target="_blank">
        <i class="fab fa-youtube-square fa-2x"></i>
      </a>
      <a href="https://www.amazon.com" target="_blank">
        <i class="fab fa-amazon fa-2x"></i>
      </a>
    </div>
  </footer>
`;

	const logo = createEl('img', ['logoImgContact']);
	//Sprawdz to
	logo.src = require('../assets/Logo1.png');
	const logoImg = contact.querySelector('.logoContact');
	logoImg.append(logo);

	section.append(course, resour, clients, mapG, contact);

	return section;
}
