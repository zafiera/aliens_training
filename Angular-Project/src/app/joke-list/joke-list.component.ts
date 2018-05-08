import { JokeComponent } from "./../joke/joke.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-joke-list",
  templateUrl: "./joke-list.component.html",
  styleUrls: ["./joke-list.component.css"]
})
export class JokeListComponent implements OnInit {
  jokes: JokeComponent[];

  constructor() {
    this.jokes = [
      {
        setup:"What did the cheese say when it looked in the mirror?",
        punchline: "Hallomi (hello me)",
        true
      ),
      new JokeComponent(
        "What kind of cheese do you use to disguise a small horse?",
        "Mask-a-pony (Mascarpone)",
        true
      ),
      new JokeComponent(
        "A kid threw a lump of cheddar at me.",
        "That wasnt very mature",
        true
      )
    ];
  }


  ngOnInit() {}
  
}
