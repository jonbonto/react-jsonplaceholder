export class APIError {

  constructor(status) {
    this.name = "APIError";
    this.message = "API error with status code " + status;
    this.status = status;
  }
}

export class BadRequestError {
  
  constructor(message) {
    this.name = "BadRequestError";
    this.message = message;
  }
}

export class UnreachableAPIError {
  
  constructor(message) {
    this.name = "UnreachableAPIError";
    this.message = message;
  }
}

export class ForbiddenError {
  
  constructor(message) {
    this.name = "ForbiddenError";
    this.message = message;
  }
}
