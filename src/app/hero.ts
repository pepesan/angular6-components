export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string,
    public status: boolean = true,
    public sex: string = 'woman',
    public password: string = '',
    public repeatPassword: string = '',
    public email: string = ''
  ) {  }
}
