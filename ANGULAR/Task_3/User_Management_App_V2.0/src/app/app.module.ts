import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { ManageModule } from './manage/manage.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UserComponent } from './user/user.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserDetailsComponent } from './shared/user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { ActiveComponentComponent } from './active/active-component/active-component.component';
import { DeletedComponentComponent } from './deleted/deleted-component/deleted-component.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActiveComponentComponent,
    DeletedComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
