# That Koa Error
[![CircleCI](https://circleci.com/gh/ThatDevCompany/that-koa-error.svg?style=svg)](https://circleci.com/gh/ThatDevCompany/that-koa-error)

##  Overview
A lightweight and extendable Error Handler library for Koa Applications

When any part of the application throws an Errors the error middleware
will intercept it and gracefully respond to the user

Any Error which extends the ApplicationError class will be handled such
that responses are properly wrapped with status codes etc.

All non-application errors are treated as 500 Internal Server Errrors

All errors will be logged to the console

### Attaching Middleware
The below TYPESCRIPT provides an example of attaching the library to the
Koa Application

```
import * as Koa from 'koa'
import { error } from 'that-koa-error'

const app = new Koa()

app.use(error())
```

### Throwing Application Errors
The below TYPESCRIPT provides an example of how to throw an Application
Error.

Please note: the ApplicationError class itself is abstract - so we can
only throw an extension class. The basic extension is the GeneralError

```
some code...

if (something bad happened) {
    throw new GeneralError('A message to only display in console', arguments)
}

some more code...
```

#### assert Application Errors
A handy utility for quickly and cleanly throwing GeneralErrors via
assertion

```
function myFunction(a: string, b: string) {
    assert(a, 'A must be provided')
    assert(
        b.length === a.length,
        'B must be the same length as A',
        {a, b}  // Pass on useful debug info here
    )
}
```

#### expectAsyncToThrow
A handy utility for testing

```
it('should throw an error in an async function', async() {
    await expectAsyncToThrow(async () => {
        throw new Error('Something happened')
    })
})
// This will be PASS


it('should throw an error in an async function', async() {
    await expectAsyncToThrow(async () => {
        return Promise.resolve()
    })
})
// This will be FAIL
```
