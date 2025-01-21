import { useState } from 'react';

class Car {
	constructor(year, make, model) {
		this.year = year;
		this.make = make;
		this.model = model;
	}

	getDetails() {
		return `${this.year} ${this.make} ${this.model}`;
	}
}

function UpdateObjects() {
	const [car, setCar] = useState(new Car(2024, "Tesla", "Model 3"));

	function handleYearChange(event) {
		setCar(new Car(event.target.value, car.make, car.model));
	}

	function handleMakeChange(event) {
		setCar(new Car(car.year, event.target.value, car.model));
	}

	function handleModelChange(event) {
		setCar(new Car(car.year, car.make, event.target.value));
	}

	return (
		<div>
			<p>Car is {car.getDetails()}</p>
			<div>
				<input className='text-red-400 my-3 font-extrabold' type="number" value={car.year} onChange={handleYearChange} /><br />
				<input className='text-red-400 my-3 font-extrabold' type="text" value={car.make} onChange={handleMakeChange} /><br />
				<input className='text-red-400 my-3 font-extrabold' type="text" value={car.model} onChange={handleModelChange} /><br />
			</div>
		</div>
	)
}

export default UpdateObjects