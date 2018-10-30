import { ApplicationError } from './application.error'

/**
 * Tests for ApplicationError
 */
describe('ApplicationError', () => {
	/**
	 * General Tests
	 */
	it('should be defined', async () => {
		expect(ApplicationError).toBeDefined()
	})

	it('should be extendable', async () => {
		class MyError extends ApplicationError {}
		const err = new MyError()
		expect(err).toBeDefined()
	})
})
