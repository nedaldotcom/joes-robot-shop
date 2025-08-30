export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  email: string;
  password?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
