import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-peter";
  orderableLists = [
    ["Item 1a", "Item 2a", "Item 3a"],
    ["Item 1b", "Item 2b", "Item 3b"]
  ];
}
