import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1,2];
  viewmode = 'hello';
  Movies = [
    {id:1, name:'avengers'},
    {id:2, name:'hulk'},
    {id:3, name:'spiderman'}
  ];
onadd() {
  this.Movies.push({id:4, name:'thor'});
}
onremove(m) {
  let index = this.Movies.indexOf(m);
  this.Movies.splice(index, 1);
}
onchange(m) {
  m.id = 'updated';
}
}
