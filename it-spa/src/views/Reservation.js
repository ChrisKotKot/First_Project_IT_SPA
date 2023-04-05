export function Reservation() {
	const div = document.createElement('section');

	div.innerHTML = `
    <section>
    <h1>Tu powstanie kalendarz</h1>
    <div class="col-sm-10">
      <input type="date" class="form-control" id="date_picker" >
    </div>
    <div class="col-sm-10">
      <input type="date" class="form-control" id="date_picker2" >
    </div>
    </section>
    `;

	let today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');

	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const yyyy = today.getFullYear();
	console.log(dd, mm, yyyy);
	today = yyyy + '-' + mm + '-' + dd;
	const date_picker = div.querySelector('#date_picker');
	date_picker.setAttribute('min', today);

	const date_picker2 = div.querySelector('#date_picker2');
	date_picker2.setAttribute('disabled', 'true');

	date_picker.addEventListener('input', () => {
		//date_picker2.setAttribute('disabled', 'false');
		date_picker2.disabled = false;
		date_picker2.setAttribute('min', date_picker.value);
		const date = new Date(date_picker.value);
		date.setFullYear(date.getFullYear() + 1);
		const dateMax = date.toISOString().slice(0, 10);
		date_picker2.setAttribute('max', dateMax);
	});

	return div;
}
