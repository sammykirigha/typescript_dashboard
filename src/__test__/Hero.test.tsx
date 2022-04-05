import { Hero } from "../components/navbar";
import * as ReactDOM from 'react-dom';
import React from 'react';

describe.skip('Hero component test', () => {
	let container: HTMLDivElement;
	const setup = () => ReactDOM.render(<Hero />, container);
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		// eslint-disable-next-line testing-library/no-render-in-setup
		setup()
	})

	afterEach(() => {
		document.body.removeChild(container);
		container.remove()
	})

	it('renders correctly', () => {
		const divs = container.querySelectorAll('div');
		expect(divs).toHaveLength(2)

		const h3s = container.querySelectorAll('h3');
		expect(h3s).toHaveLength(1);

		const labels = container.querySelector('label');
		expect(labels).not.toBeInTheDocument()
	})
})