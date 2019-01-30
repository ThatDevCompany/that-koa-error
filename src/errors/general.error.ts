import { ApplicationError } from './application.error'

/**
 * A General Error
 */
export class GeneralError extends ApplicationError {
	constructor(
		generalErrorMessage: string = 'A General Error has occurred',
		generalErrorInfo: any = {}
	) {
		super(500, generalErrorMessage, '', generalErrorInfo)
	}
}
