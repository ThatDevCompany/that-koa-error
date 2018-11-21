import { logApplicationError } from './logApplicationError'
import { GeneralError } from '@/errors'

describe('logApplicationError', () => {
	it('should log', async () => {
		const err = new GeneralError('Debug Message', {})
		logApplicationError(err)
	})
})
