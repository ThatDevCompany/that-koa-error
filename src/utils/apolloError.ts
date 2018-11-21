import { logUnexpectedError } from '@/utils/logUnexpectedError'
import { logApplicationError } from '@/utils/logApplicationError'
import * as _ from 'lodash'

/**
 * A middleware for handling application errors in a Koa application
 */
export function apolloError() {
	return err => {
		const exc = _.get(err, 'extensions.exception', {})
		// Is the error an Apollo Error wrapping an Application Error?
		if (exc.status) {
			err.status = err.extensions.exception.status
			err.debugMessage = err.extensions.exception.debugMessage
			logApplicationError(err)
			return {
				status: err.status,
				message: err.message
			}
			// Otherwise it is an untrapped error
		} else if (err) {
			logUnexpectedError(err)
			return {
				status: 500,
				message: err.message
			}
			// Null safety
		} else {
			logUnexpectedError(new Error('Unknown Error'))
			return {
				status: 500,
				message: 'Unknown Error'
			}
		}
	}
}
