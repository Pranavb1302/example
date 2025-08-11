// it is good practice to create angular rootApp module beside app component while working with modules

// modules are used to group components toegather

// i will now migrate my current application which is based on standalone compnents to module based architecture

step -1

// create a root module file app.module.ts

step -2
// import a decorator called NgModule to provide config to the module.ts as we do using @Component in standalone compo

step -3

// writing in app.module.ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}

step -4
// tell main.ts that application should boot first this module file
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import { AppComponent } from './app/app.component'

platformBrowserDynamic().bootstrapModule(AppComponent)

step -5
// add the rest of components in module.ts file

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[HeaderComponent,UserComponent,TasksComponent,RouterOutlet]
})
export class AppModule{}

step-6

// now after doing this we will encounter a error saying that Injectable was not found in the dependancy injection tree

// solution to this is importing BrowserModule it includes generallly all crucial features for running a angular app

step -7

// if want to make everythhing module based we ca make them standalone : false and then add to declarations array

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskgenComponent } from './tasks/taskgen/taskgen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    TaskgenComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterOutlet, FormsModule],
})
export class AppModule {}

// the advantage  of using modules  is the @Component decorators ar leaner  and everything is stored in a central place

