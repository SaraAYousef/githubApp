import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.modules';
import { UserService } from './service/user.service';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { ReposComponent } from './repos/repos.component';
import { FilterPipe } from './pipe/filter.pipe';
import { DropdownDirective } from './directive/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    LoginComponent,
    ProfileComponent,
    ReposComponent,
    FilterPipe,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
