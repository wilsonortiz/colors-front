import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListadoColorsComponent } from './components/listado-colors/listado-colors.component';

//librerias
import { ClipboardModule } from 'ngx-clipboard';
import { CopiedColorDirective } from './directives/copied-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListadoColorsComponent,
    CopiedColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
