class ApiError extends Error {
  statusCode: number
  data: any
  success: boolean
  errors: any[]

  constructor(
    statusCode: number,
    message: string = 'Something went wrong',
    errors: any[] = [],
    data: any = null
  ) {
    super(message)
    this.statusCode = statusCode
    this.data = data
    this.success = false
    this.errors = errors
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ApiError
