import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.css"]
})
export class JokeComponent implements OnInit {
  @Input() joke: JokeComponent;
  @Input() data: JokeComponent;

  setup: string;
  punchline: string;
  hide: boolean;

  constructor(setup: string, punchline: string, hide: boolean) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle(joke) {
    joke.hide != joke.hide;
  }
  
  ngOnInit() {}
}
