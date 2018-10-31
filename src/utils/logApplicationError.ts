import { ApplicationError } from '../errors'

export function logApplicationError(err: ApplicationError) {
	console.warn('-----------------')
	console.warn('APPLICATION ERROR')
	console.warn('-----------------')
	console.warn(err.status + ': ' + err.message)
	if (err.debugMessage) {
		console.warn(err.debugMessage)
	}
	if (err.debugInfo) {
		console.warn(JSON.stringify(err.debugInfo, null, 4))
	}
	console.warn('-----------------')
	console.warn(err)
	console.warn('-----------------')
}
