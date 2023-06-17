export class User{

  public id: number;
  public email: string;
  public password: string;
  public authStatus : string;
  public token?: number;

  constructor({ id, email, password, authStatus, token}:
    { id?: number; email?: string; password?: string; authStatus?: string; token?:number} = {}) {
        this.id = id || 0;
        this.email = email || '';
        this.password = password || '';
        this.authStatus = authStatus || '';
        this.token = id ;
    }

}
