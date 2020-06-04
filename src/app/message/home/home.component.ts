import { Component, OnInit } from "@angular/core";
import { User } from "@src/app/shared/model/user.model";
import { Message } from "../model/message";
import { MessageService } from "../services/message.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  newMessage: string;
  messages: any[] = [];
  constructor(private messageService: MessageService) {}
  public sendMessage() {
    this.messageService.test();
  }
  ngOnInit() {}
}
