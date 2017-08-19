import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  login = '';
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.login = 'test';
    // redirect to login if no sessions found
    // maybe next time we should try to do a request and if
    // it return 'invalid token' then redirect... but perf issues ?
    if (sessionStorage.getItem("token") == null)
      this.router.navigate(['/enter/l']);
  }
}
