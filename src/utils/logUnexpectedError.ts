import * as colors from 'colors/safe'

function colored(str: string) {
	if (!str || str.length < 2) return ''
	return colors.red(str)
}

function bold(str: string) {
	if (!str || str.length < 2) return ''
	return colors.bold(str)
}

function black(str: string) {
	if (!str || str.length < 2) return ''
	return colors.black(str)
}

function hr() {
	return colored(bold('-----------------'))
}

function h1(str: string) {
	if (!str || str.length < 2) return ''
	return hr() + '\n' + colored(bold(str))
}

function h2(str: string) {
	if (!str || str.length < 2) return ''
	return hr() + '\n' + black(str)
}

export function logUnexpectedError(err: Error) {
	console.log(
		h1('UNEXPECTED ERROR' + '\n') + colored(err.message + '\n') + hr() + '\n',
		err,
		'\n' + hr()
	)
}
