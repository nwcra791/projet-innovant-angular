import { Injectable } from '@angular/core';



@Injectable()
export class LoggingService {

  constructor() { }

  private loginState: boolean = false;
  private connInfos: Object = {

  };

  private secret: string = "";

  public setConnInfos(connInfos: Object): void {
    this.connInfos = connInfos;
  }

  public getConnInfos(): Object {
    return this.connInfos;
  }

  public setSecret(secret: string): void {
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
