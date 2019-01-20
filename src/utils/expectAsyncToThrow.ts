/**
 * An assert function for testing Async functions which throw errors
 */
export async function expectAsyncToThrow(fnc, cb?: (err: Error) => any) {
	let caughtError: Error = null
	try {
		await fnc()
	} catch (err) {
		caughtError = err
	}
	expect(caughtError).toBeDefined()
	if (cb) {
		cb(caughtError)
	}
}
