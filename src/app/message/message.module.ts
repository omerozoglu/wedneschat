import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageComponent } from "./message.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { UsersComponent } from "./sidenav/users/users.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MessageComponent,
    SidenavComponent,
    HomeComponent,
    NavComponent,
    UsersComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [MessageComponent]
})
export class MessageModule {}
