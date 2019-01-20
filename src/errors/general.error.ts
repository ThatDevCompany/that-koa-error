import { ApplicationError } from './application.error'

/**
 * A General Error
 */
export class GeneralError extends ApplicationError {
	constructor(
		generalErrorMessage: string = 'No debug information provided',
		generalErrorInfo: any = {}
	) {
		super(500, 'General Error - ' + generalErrorMessage, '', generalErrorInfo)
	}
}
