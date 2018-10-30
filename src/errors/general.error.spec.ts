import { GeneralError } from './general.error'
import {ApplicationError} from "@/errors/application.error";

/**
 * Tests for GeneralError
 */
describe('GeneralError', () => {
	/**
	 * General Tests
	 */
	it('should be defined', async () => {
		expect(GeneralError).toBeDefined()
	})

	it('should be instantiable', async () => {
		const err = new GeneralError()
		expect(err).toBeDefined()
	})
})
