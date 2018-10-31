import { logUnexpectedError } from '@/utils/logUnexpectedError'
import { logApplicationError } from '@/utils/logApplicationError'

/**
 * A middleware for handling application errors in a Koa application
 */
export function apolloError() {
	return err => {
		// Is the error an Apollo Error wrapping an Application Error?
		if (err.extensions.exception.status) {
			err.status = err.extensions.exception.status
			err.debugMessage = err.extensions.exception.debugMessage
			logApplicationError(err)
			return {
				status: err.status,
				message: err.message
			}
			// Otherwise it is an untrapped error
		} else {
			logUnexpectedError(err)
			return {
				status: 500,
				message: err.message
			}
		}
	}
}
