export class IngresoEgreso {

  id?: string;
  type: string;
  description: string;
  amount: number;

  constructor(user: any) {
    this.id          = user && user.id          || null;
    this.type        = user && user.type        || null;
    this.description = user && user.description || null;
    this.amount      = user && user.amount      || null;
  }

}
