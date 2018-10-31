import { ApplicationError } from '@/errors'
import { logUnexpectedError } from '@/utils/logUnexpectedError'
import { logApplicationError } from '@/utils/logApplicationError'

/**
 * A middleware for handling application errors in a Koa application
 */
export function apolloError() {
	return err => {
		if (err instanceof ApplicationError) {
			logApplicationError(err)
			return new Error(err.message)
		} else {
			logUnexpectedError(err)
			return new Error('Internal Server Error')
		}
	}
}
