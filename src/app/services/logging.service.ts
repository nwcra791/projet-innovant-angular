import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class LoggingService {

    constructor(router: Router) {
        this.router = router;
    }

    private router: Router;
    private loginState = false;
    private connInfos: Object = {};

    private secret = '';

    public setConnInfos(connInfos: Object): void {
        sessionStorage.setItem('user', JSON.stringify(connInfos));
        this.connInfos = connInfos;
    }

    public getConnInfos(): Object {
        return this.connInfos;
    }

    public setSecret(secret: string): void {
        sessionStorage.setItem('token', secret);
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

    public getMail(): string {
        const user = JSON.parse(sessionStorage.getItem('user'));
        // console.dir(user);
        return user.email;
    }

    public invalidateSession(): void {
        sessionStorage.clear();
        this.router.navigate(['/enter/l']);
    }
}
