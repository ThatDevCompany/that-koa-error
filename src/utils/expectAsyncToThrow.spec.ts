import { expectAsyncToThrow } from './expectAsyncToThrow'

/**
 * Tests for expectAsyncToThrow
 */
describe('expectAsyncToThrow', () => {
	it('should be defined', async () => {
		expect(expectAsyncToThrow).toBeDefined()
	})

	it('should be valid if function throws error', async () => {
		await expectAsyncToThrow(() => {
			throw new Error('')
		})
	})

	it('should callback with error for further analysis', async () => {
		const spy = jasmine.createSpy('test').and.callFake(err => {
			expect(err.message).toBe('Hello')
		})
		await expectAsyncToThrow(() => {
			throw new Error('Hello')
		}, spy)
		expect(spy).toHaveBeenCalled()
	})
})
