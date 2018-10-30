import { ApplicationError } from './application.error'
import * as assert from 'assert'

/**
 * A General Error
 */
export class GeneralError extends ApplicationError {
	constructor(
		public debugMessage: string = 'No debug information provided',
		public debugInfo: any = {}
	) {
		super(500, 'A General Error has occurred', debugMessage, debugInfo)
	}

	static assert(
		value,
		debugMessage: string = 'No debug information provided',
		debugInfo: any = {}
	) {
		try {
			assert(value)
		} catch (err) {
			throw new GeneralError(debugMessage, { ...debugInfo, value, err })
		}
	}
}
