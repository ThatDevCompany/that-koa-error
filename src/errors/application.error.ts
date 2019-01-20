/**
 * An Generic ApplicationError class
 */
export class ApplicationError extends Error {
	constructor(
		public status: number = 500,
		public message: string = 'An unexpected Application Error has occurred',
		public debugMessage: string = 'No debug information provided',
		public debugInfo: any = null
	) {
		super(message)
		Object.setPrototypeOf(this, ApplicationError.prototype) //Needed to maintain Error stack
	}
}
