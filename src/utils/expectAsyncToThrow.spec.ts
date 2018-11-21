import { expectAsyncToThrow } from './expectAsyncToThrow'

/**
 * Tests for expectAsyncToThrow
 */
describe('expectAsyncToThrow', () => {
	/**
	 * General Tests
	 */
	it('should be defined', async () => {
		expect(expectAsyncToThrow).toBeDefined()
	})

	/**
	 * General Tests
	 */
	it('should be valid if function throws error', async () => {
		await expectAsyncToThrow(() => {
			throw new Error('')
		})
	})

})
