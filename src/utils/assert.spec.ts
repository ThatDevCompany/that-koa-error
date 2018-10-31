import { assert } from './assert'
import { ApplicationError } from '@/errors'

/**
 * Tests for Assert
 */
describe('Assert', () => {
	/**
	 * General Tests
	 */
	it('should be defined', async () => {
		expect(assert).toBeDefined()
	})

	it('should throw an error if value not truthy', async () => {
		try {
			assert(false)
			expect(false).toBeTruthy()
		} catch (e) {
			expect(true).toBeTruthy()
			expect((e as ApplicationError).status).toBe(500)
		}
	})

	it('should NOT throw an error if value truthy', async () => {
		try {
			assert(true)
			expect(true).toBeTruthy()
		} catch (e) {
			expect(false).toBeTruthy()
		}
	})
})
