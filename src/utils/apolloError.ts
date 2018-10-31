import { ApplicationError } from '@/errors'

/**
 * A middleware for handling application errors in a Koa application
 */
export function apolloError() {
	return err => {
		if (err instanceof ApplicationError) {
			console.warn('APPLICATION ERROR', err)
			return new Error(err.message)
		} else {
			console.error('UNEXPECTED ERROR', err)
			return new Error('Internal Server Error')
		}
	}
}
