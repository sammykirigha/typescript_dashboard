import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { CardContent, CardContentTwo, NewsHeader } from '../components/DashboardLeftCards';


describe('<Content />', () => {
	beforeAll(() => {
	  console.log('Running before all test');
	})
 
	afterEach(cleanup);

	it('renders first card with correct text', () => {
		render(<CardContent />)
		let element = screen.getByText('Visitors');

		expect(element.textContent).toBe('Visitors')

	})

	it('The inner dashboard renders with the correct', () => {
		 render(<CardContentTwo />)
		let element = screen.getByText('Orders');

		expect(element.textContent).toBe('Orders')
		
	})

	it('The card should render latest news text', () => {
		render(<NewsHeader />)
		let element = screen.getByText((content, element) => content.startsWith('Latest'))

		expect(element.textContent).toBe('Latest news')
	})
})