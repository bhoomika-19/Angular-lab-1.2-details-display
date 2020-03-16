import { Component } from '@angular/core';
import { Form } from './form';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(){}
model=new Form(1001,"Rahul",5000,"JAVA");
submitted=false;
onSubmit(){
  alert(this.model.id+" "+this.model.name+" "+this.model.salary+" "+this.model.department);
}
}
 

