import { Component } from '@angular/core';

// Gettin animation package
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation',[
      state('inactive', style({
        backgroundColor: '#eee',
      })),
      state('active', style({
        backgroundColor: '#ffcc00'
      })),
      transition('active <=> inactive', [
        style({
          transform:'translateX(40px)'
        }),
        animate('500ms ease-in')
      ]) // Instead of adding the second state
      // transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class AppComponent {
  title = 'app';
  likes = "soccer"

  myFunction(count){
    console.log(count.value);
  }
  alertStatus(status){
    return status === 'danger';
  }

  prop1 = true;
  prop2 = false;
  prop3 = true;

  myClasses = {
    danger: this.prop1,
    safe: this.prop2,
    changed: this.prop3
  }

  // NG Styles binding
  ngStyle = {
    'color': 'red',
    'font-weight': 'light',
    'font-family': 'sans-serif'
  }

  decoration = 'underline';
  ternary = true;

  //  PROPERTY BINDING
  logoUrl = "https://cdn.dribbble.com/users/10882/screenshots/1117430/fox_1.png";
  imgUrl = "https://cdn.dribbble.com/users/758750/screenshots/1926022/book_geek_logo_dribble.jpg"
  btnState = true;

  // EVENT BINDING
  toggleLogo(event){
    console.log(event);
  }
  toggleImage(){
    this.btnState = !this.btnState;
  }
  typed = ""
  keyPressed(event){
    this.typed = event;
  }

  animationState = 'inactive';
  // ANIMATIONS
  animate(){
    this.animationState = (this.animationState === 'inactive' ? 'active' : 'inactive')
  }
}
