import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {BasicHighlight} from "./directives/basic-highlight";
import { RendererBasicHighlightDirective } from './directives/renderer-basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlight,
    RendererBasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
