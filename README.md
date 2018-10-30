# That Koa Error

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
