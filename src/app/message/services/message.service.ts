import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Observer } from "rxjs";
import { Message } from "../model/message";

const SERVER_URL = "http://localhost:3100/messages";
@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor() {}

  public test() {
    console.log("test");
  }
  public sendMessage() {}
  public getMessages = () => {};
}
