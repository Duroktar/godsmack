export { TokenExpiredError } from 'jsonwebtoken';

export class GodsmackError extends Error { }

export class AuthServiceError extends GodsmackError { }
