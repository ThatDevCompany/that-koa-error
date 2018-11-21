import { logUnexpectedError } from './logUnexpectedError'
import { GeneralError } from '@/errors'

describe('logUnexpectedError', () => {
	it('should log', async () => {
		const err = new GeneralError('Debug Message', {})
		logUnexpectedError(err)
	})
})
