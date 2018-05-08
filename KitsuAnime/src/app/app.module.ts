import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { AnimeListComponent } from "./components/anime-list/anime-list.component";
import { AnimeInfoComponent } from "./components/anime-info/anime-info.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AnimeListComponent,
    AnimeInfoComponent,
    FormsModule,
    HttpClientModule,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
