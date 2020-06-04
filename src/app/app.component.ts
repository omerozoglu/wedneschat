import { Component, OnInit } from "@angular/core";
import { NumberSymbol } from "@angular/common";
import * as socketIo from "socket.io-client";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //const socket = socketIo("http://localhost:3000");
    //socket.on("connection", data => console.log(data));
  }
  title = "wedneschat";
}
