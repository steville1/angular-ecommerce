export class User {
  usernameOrEmail: string | null;;
  password: string | null;
  constructor(user?: User){
    this.usernameOrEmail = user ? user.usernameOrEmail : null;
    this.password = user ? user.password : null;
  }
}
