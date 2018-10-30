import { GeneralError } from './errors'
import * as assertJs from 'assert'

/**
 * A General Error
 */
export function assert(
	value,
	debugMessage: string = 'No debug information provided',
	debugInfo: any = {}
): void {
	try {
		assertJs(value)
	} catch (err) {
		throw new GeneralError(debugMessage, { ...debugInfo, value, err })
	}
}
