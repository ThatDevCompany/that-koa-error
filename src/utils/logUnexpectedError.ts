import * as colors from 'colors/safe'

function colored(str: string) {
	/* istanbul ignore next */
	if (!str || str.length < 2) return ''
	return colors.red(str)
}

function bold(str: string) {
	/* istanbul ignore next */
	if (!str || str.length < 2) return ''
	return colors.bold(str)
}

function hr() {
	return colored(bold('-----------------'))
}

function h1(str: string) {
	/* istanbul ignore next */
	if (!str || str.length < 2) return ''
	return hr() + '\n' + colored(bold(str))
}

export function logUnexpectedError(err: Error) {
	console.log(
		h1('UNEXPECTED ERROR' + '\n') + colored(err.message + '\n') + hr() + '\n',
		err,
		'\n' + hr()
	)
}
