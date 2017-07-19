import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
     <a routerLink="/login">登录</a>
     <a routerLink="/update-password">修改密码</a>
   </nav>
   <router-outlet></router-outlet>
 `,
  styleUrls: ['app.component.css']

})
export class AppComponent {
  title = 'Tour of Heroes';
}
