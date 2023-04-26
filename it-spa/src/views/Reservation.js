export function Reservation() {
	const div = document.createElement('section');

	div.innerHTML = `
    <section>
    <h1>Sprawdź dostępność w naszym kalendarzu!</h1>
	<div class="col-sm-10">
	<div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
    <div class="col-sm-10" >
      <input type="date" class="form-control" id="date_picker"  >
    </div>
    <div class="col-sm-10">
      <input type="date" class="form-control" id="date_picker2" >
    </div>
    </section>
    `;

	const Group = div.querySelector('#exampleFormControlSelect1');

	fetch(`http://localhost:3000/rooms/${roomId}`)
		.then((response) => response.json())
		.then((room) => {
			const lis = rooms.map((room) => {
				const li = document.createElement('option');
				li.innerText = room.name;
				return li;
			});
			Group.append(...lis);
		});

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
