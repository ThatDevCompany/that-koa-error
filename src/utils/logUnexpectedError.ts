export function logUnexpectedError(err: Error) {
	console.error('-----------------')
	console.error('UNEXPECTED ERROR')
	console.error('-----------------')
	console.error(err.message)
	console.error('-----------------')
	console.error(err)
	console.error('-----------------')
}
