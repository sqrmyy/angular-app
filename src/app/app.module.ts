import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { MycheckService } from './mycheck.service';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'msg', component: MessageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    MystyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() { 
  }
}
