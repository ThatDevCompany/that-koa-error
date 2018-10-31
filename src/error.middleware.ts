import { ApplicationError } from '@/errors'
import { logApplicationError } from '@/utils/logApplicationError'
import { logUnexpectedError } from '@/utils/logUnexpectedError'

/**
 * A middleware for handling application errors in a Koa application
 */
export function error() {
	return async (ctx, next) => {
		try {
			await next()
		} catch (err) {
			/**
			 * An Application Error
			 */
			if (err instanceof ApplicationError) {
				ctx.status = err.status
				ctx.body = {
					status: err.status,
					message: err.message
				}
				logApplicationError(err)
			} else {
				/**
				 * An Unexpected Error
				 */
				ctx.status = 500
				ctx.body = {
					status: 500,
					message: 'An unexpected technical error has occurred'
				}
				logUnexpectedError(err)
			}
		}
	}
}
