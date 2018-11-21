import { ApplicationError } from '@/errors'
import * as colors from 'colors/safe'

function colored(str: string) {
	/* istanbul ignore next */
	if (!str || str.length < 2) return ''
	return colors.yellow(str)
}

function bold(str: string) {
	/* istanbul ignore next */
	if (!str || str.length < 2) return ''
	return colors.bold(str)
}

function black(str: string) {
	/* istanbul ignore next */
	if (!str || str.length < 2) return ''
	return colors.black(str)
}

function hr() {
	return colored(bold('-----------------'))
}

function h1(str: string) {
	/* istanbul ignore next */
	if (!str || str.length < 2) return ''
	return hr() + '\n' + colored(bold(str))
}

function h2(str: string) {
	/* istanbul ignore next */
	if (!str || str.length < 2) return ''
	return hr() + '\n' + black(str)
}

export function logApplicationError(err: ApplicationError) {
	let debugInfo
	try {
		/* istanbul ignore next */
		debugInfo = err.debugInfo || (err as any).extensions.exception.debugInfo
	} catch (e) {
		/* istanbul ignore next */
		debugInfo = 'No info'
	}
	console.log(
		h1('APPLICATION ERROR') +
			'\n' +
			colored(err.status + ': ' + err.message + '\n') +
			h2(err.debugMessage + '\n') +
			hr() +
			'\n',
		debugInfo,
		'\n' + hr()
	)
}
