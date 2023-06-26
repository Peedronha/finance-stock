export class User{

  public id: number;
  public email: string;
  public password: string;
  public authStatus : string;
  public company: string;
  public token?: number;

  constructor({ id, email, password, authStatus, token, company}:
    { id?: number; email?: string; password?: string; authStatus?: string; token?:number, company?: string} = {}) {
        this.id = id || 0;
        this.email = email || '';
        this.password = password || '';
        this.authStatus = authStatus || '';
        this.token = id ;
        this.company = company || '';
    }
}
