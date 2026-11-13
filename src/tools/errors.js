class StatusCodeError extends Error {
  constructor(statusCode, body, options, response) {
    const message = statusCode + ' - ' + JSON.stringify(body);
    super(message);

    this.name = 'StatusCodeError';
    this.statusCode = statusCode;
    this.options = options;
    this.response = response;
    // Cloudflare marks interactive "Just a moment..." pages with this header.
    if (response && response.headers && response.headers.get('cf-mitigated') === 'challenge') {
      this.code = 'CHALLENGE_REQUIRED';
    }
  }
}

class AbortError extends Error {
  constructor(message) {
    super(message);

    this.name = 'AbortError';
    this.code = 'EABORT';
  }
}

class ErrorWithCode extends Error {
  constructor(message, code) {
    super(message);

    this.code = code;
  }
}

export {StatusCodeError, AbortError, ErrorWithCode};