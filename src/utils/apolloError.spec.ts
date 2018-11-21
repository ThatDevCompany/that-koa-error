import { apolloError } from './apolloError'

describe('apolloError', () => {
	it('should be a factory', async () => {
		expect(typeof apolloError()).toBe('function')
	})

	it('should return 500 if null provided', async () => {
		let e = apolloError(),
			r = e(null)
		expect(r.status).toBe(500)
	})

	it('should return 500 if Error provided', async () => {
		let e = apolloError(),
			r = e(new Error('sdfsdf'))
		expect(r.status).toBe(500)
		expect(r.message).toBe('sdfsdf')
	})

	it('should return status code if Apollo Error provided', async () => {
		let e = apolloError(),
			r = e({
				extensions: {
					exception: {
						status: 200,
						message: 'dsdfdsf'
					}
				}
			})
		expect(r.status).toBe(200)
		expect(r.message).toBe('dsdfdsf')
	})
})
