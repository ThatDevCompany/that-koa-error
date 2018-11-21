import { error } from './error.middleware'
import { GeneralError } from '@/errors'

/**
 * Tests for Error Middleware
 */
describe('Error Middleware', () => {
	/**
	 * General Tests
	 */
	it('should be defined', async () => {
		expect(error).toBeDefined()
	})

	it('should be middleware factory', async () => {
		expect(typeof error).toBe('function')

		const middleware = error()
		expect(typeof middleware).toBe('function')
	})

	it('should catch unhandled non application errors', async () => {
		const spy = spyOn(console, 'log')
		const middleware = error()
		const ctx = {
			body: null,
			status: 0
		}
		const next = async () => {
			throw new Error()
		}
		await middleware(ctx, next)
		expect(ctx.status).toBe(500)
		expect(ctx.body).toBeDefined()
		expect(ctx.body.status).toBe(500)
		expect(ctx.body.message).toBe('An unexpected technical error has occurred')
		expect(spy.calls.count()).toBe(1)
	})

	it('should catch application errors', async () => {
		const spy = spyOn(console, 'log')
		const middleware = error()
		const ctx = {
			body: null,
			status: 0
		}
		const next = async () => {
			throw new GeneralError()
		}
		await middleware(ctx, next)
		expect(ctx.status).toBe(500)
		expect(ctx.body).toBeDefined()
		expect(ctx.body.status).toBe(500)
		expect(ctx.body.message).toBe('A General Error has occurred')
		expect(spy.calls.count()).toBe(1)
	})
})
