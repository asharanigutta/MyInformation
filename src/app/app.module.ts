import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeModule } from './about-me/about-me.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RepositoryService } from './Repositories/repository.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      RepositoryService, { dataEncapsulation: false }
    ),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
