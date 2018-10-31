/**
 * An assert function for testing Async functions which throw errors
 */
export async function expectAsyncToThrow(fnc) {
	let errorCaught = false
	try {
		await fnc()
	} catch (err) {
		errorCaught = true
	}
	expect(errorCaught).toBeTruthy()
}
