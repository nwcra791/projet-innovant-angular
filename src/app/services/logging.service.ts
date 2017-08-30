import { Injectable } from '@angular/core';



@Injectable()
export class LoggingService {

  constructor() { }

  private loginState: boolean = false;
  private connInfos: Object = {

  };

  private secret: string = "";

  public setConnInfos(connInfos: Object): void {
    sessionStorage.setItem("user", connInfos.toString());
    this.connInfos = connInfos;
  }

  public getConnInfos(): Object {
    return this.connInfos;
  }

  public setSecret(secret: string): void {
    sessionStorage.setItem("token", secret);
    this.secret = secret;
  }

  public getSecret(): string {
    return this.secret;
  }

  public login(): void {
    this.loginState = true;
  }

  public logout(): void {
    this.loginState = false;
  }

  public isLogin(): boolean {
    return this.loginState;
  }

}
