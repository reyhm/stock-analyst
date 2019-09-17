export class User {

  id: string;
  name: string;
  email: string;

  constructor(user: any) {
    this.id = user && user.id || null;
    this.name = user && user.name || null;
    this.email = user && user.email || null;
  }

}
