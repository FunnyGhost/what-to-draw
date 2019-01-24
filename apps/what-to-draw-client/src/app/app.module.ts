import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { AppComponent } from './app.component';
import { InteractiveWordComponent } from './interactive-word/interactive-word.component';
import { AdjectiveComponent } from './adjective/adjective.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, InteractiveWordComponent, AdjectiveComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
