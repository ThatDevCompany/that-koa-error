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
				console.warn('-----------------')
				console.warn('APPLICATION ERROR')
				console.warn('-----------------')
				console.warn(err.status + ': ' + err.message)
				if (err.debugMessage) console.warn(err.debugMessage)
				if (err.debugInfo) console.warn(JSON.stringify(err.debugInfo, null, 4))
				console.warn('-----------------')
				console.warn(err)
				console.warn('-----------------')
			} else {
				/**
				 * An Unexpected Error
				 */
				ctx.status = 500
				ctx.body = {
					status: 500,
					message: 'An unexpected technical error has occurred'
				}
				console.warn('-----------------')
				console.warn('UNEXPECTED ERROR')
				console.warn('-----------------')
				console.warn(err.message)
				console.warn('-----------------')
				console.error(err)
				console.warn('-----------------')
			}
		}
	}
}
