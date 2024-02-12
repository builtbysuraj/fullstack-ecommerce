class ApiResponse {
  statusCode: any
  data: any
  message: string
  success: boolean

  constructor(statusCode: number, data: any, message: string = 'Success') {
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.success = this.statusCode >= 200 && this.statusCode < 300
  }
}

export default ApiResponse
