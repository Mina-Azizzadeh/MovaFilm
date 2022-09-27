export interface AuthRegister {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  registered?: boolean
}

export interface AccountSetupInterest {
  id: number;
  name: string;
}
