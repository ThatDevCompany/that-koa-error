import { ApplicationError } from '@/errors'

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
				console.warn('APPLICATION ERROR', err)
			} else {
				/**
				 * An Unexpected Error
				 */
				ctx.status = 500
				ctx.body = {
					status: 500,
					message: 'An unexpected technical error has occurred'
				}
				console.error('UNEXPECTED ERROR', err)
			}
		}
	}
}
