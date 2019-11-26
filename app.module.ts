import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputeComponent } from './compute/compute.component';
import { FormComponent } from './form/form.component';
import { FormBuilder } from '@angular/forms';
import { EmitterComponent } from './emitter/emitter.component';
import { TodosComponent } from './todos/todos.component';
import { VoterComponent } from './voter/voter.component';
import { TodoSComponent } from './todo-s/todo-s.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputeComponent,
    FormComponent,
    FormBuilder,
    EmitterComponent,
    TodosComponent,
    HttpClientModule,
    VoterComponent,
    TodoSComponent,
    UserDetailComponent,
    UsersComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
