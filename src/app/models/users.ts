export enum Role {
  User = 'User',
  Admin = 'Admin',
  Teacher = 'Teacher',
  Student = 'Student'
}

export class User {
  id?: string;
  userName: string;
  password: string;
  role: string;
  token?: string;
  name?: string;
}
