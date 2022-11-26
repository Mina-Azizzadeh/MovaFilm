import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthRegister } from '../../model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthRegister>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDc9c9vRpjCW8zfG5SVmRQjK8lB_L0nuMQ', {
      email, password, returnSecureToken: true
    }).pipe(
      catchError(this.handleError)
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthRegister>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDc9c9vRpjCW8zfG5SVmRQjK8lB_L0nuMQ', {
      email, password, returnSecureToken: true
    }).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unkhow error occurred!'

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = ' There is no user record corresponding to this identifier'
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is invalid'
        break;
      case 'USER_DISABLED':
        errorMessage = 'The user account has been disabled by an administrator.'
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'The email address is already in use by another account'
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project'
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later'
        break;
    }
    return throwError(errorMessage)
  }
}
