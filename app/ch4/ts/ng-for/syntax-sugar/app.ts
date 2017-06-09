import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Directive, ElementRef, HostListener...} from '@angular/core';

    @Directive({
selector: '[saToolTip]'
    })
export class Tooltip {
@Input() saToolTip:string;
    
constructor(private el: ElementRef, private overlay: Overlay) {
    this.overlay.attach(el.nativeElement);
}
    
    @HostListener('mouseenter')
onMouseEnter() {
    this.overlay.open(this.el, this.saToolTip);
}
    
    @HostListener('mouseleave')
onMouseLeave() {
    this.overlay.close();
}
}

@Component({
  selector: 'app',
  templateUrl: './app.html'
})
class App {
  todos: string[];
  name: string;
  handle() {
    alert(42);
  }
  constructor() {
    this.name = "Will";
    this.todos = ['Buy Food', "Save the world"];
  }
}

@NgModule({
  declarations: [App],
  imports: [BrowserModule],
  bootstrap: [App],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

