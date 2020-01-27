import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";

import { ClipboardModule } from "@angular/cdk/clipboard";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ClipboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
