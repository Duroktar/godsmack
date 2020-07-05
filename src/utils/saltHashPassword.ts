import crypto from 'crypto'
import { promisify } from 'util';

const pbkdf2 = promisify(crypto.pbkdf2)

const defaults = {
  saltlength: 128,
  iterations: 1000,
  keylength: 64,
  digest: 'sha512',
}

export interface HashPassword {
  hash: string;
  salt: string;
}

/**
 * Create a hashPassword function
 * @param {Number} saltlength - Number of random salt bytes
 * @param {Number} iterations
 * @param {Number} keylength
 * @param {String} digest
 * @return {Function}
 */
function createHashPasswordFn(saltlength: number, iterations: number, keylength: number, digest: string): (arg: string) => Promise<HashPassword> {
  /**
   * Hash a password with a random salt
   * @param {String} password
   * @return {Promise<HashPassword>}
   */
  return async function hashPassword(password: string): Promise<HashPassword> {
    const salt = crypto.randomBytes(saltlength).toString('base64')
    const hashBuffer = await pbkdf2(password, salt, iterations, keylength, digest)
    const hash = hashBuffer.toString('hex')
    return { hash, salt, iterations, keylength, digest } as HashPassword
  }
}

/**
 * Create a compare password function
 *
 * @param {number} iterations
 * @param {number} keylength
 * @param {string} digest
 * @returns
 */
function createIsPasswordCorrectFn(iterations: number, keylength: number, digest: string) {
  /**
   * Compare password attempt to a saved salt-hash-password
   * @param {HashPassword} hashPassword - Saved salt-hash-password
   * @param {String} passwordAttempt - Plain text password attempt
   * @return {Promise<Boolean>}
   */
  return async function isPasswordCorrect({ salt, hash }: HashPassword, passwordAttempt: string): Promise<boolean> {
    const hashBuffer = await pbkdf2(
      passwordAttempt,
      salt,
      iterations,
      keylength,
      digest
    )
    const hashAttempt = hashBuffer.toString('hex')
    return hash == hashAttempt
  }
}

/**
 * Hash a password with a random salt (Sha512)
 * @param {String} password
 * @return {Promise<HashPassword>}
 */
const hashPasswordSha512 = createHashPasswordFn(
  defaults.saltlength,
  defaults.iterations,
  defaults.keylength,
  defaults.digest,
)

/**
 * Compare password attempt to a saved salt-hash-password (Sha512)
 * @param {HashPassword} hashPassword - Saved salt-hash-password
 * @param {String} passwordAttempt - Plain text password attempt
 * @return {Promise<Boolean>}
 */
const isSha512PasswordCorrect = createIsPasswordCorrectFn(
  defaults.iterations,
  defaults.keylength,
  defaults.digest,
)

export { hashPasswordSha512, isSha512PasswordCorrect }
