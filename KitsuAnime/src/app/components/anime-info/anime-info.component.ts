import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-anime-info",
  templateUrl: "./anime-info.component.html",
  styleUrls: ["./anime-info.component.css"]
})
export class AnimeInfoComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(public http: HttpClient) {}

  makeRequest(): void {
    this.loading = true;
  }

  ngOnInit() {}
}
