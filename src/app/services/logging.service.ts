import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  private loginState: boolean = false;

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
