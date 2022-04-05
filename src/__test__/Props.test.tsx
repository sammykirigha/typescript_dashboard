import { CardFooter } from "../components/reusableCompts";

jest.mock('CardFooter', () => {
	return jest.fn(() => null)
})

describe('<CardHeader />', () => {
	it('Test if components renders with the right props', () => {
		expect(CardFooter).toHaveBeenCalledWith(props, context)
	})
})

function props(props: any, context: any) {
	throw new Error("Function not implemented.");
}
function context(props: (props: any, context: any) => void, context: any) {
	throw new Error("Function not implemented.");
}

