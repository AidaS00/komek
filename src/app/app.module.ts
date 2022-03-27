import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { RestorationComponent } from './restoration/restoration.component';
import { DonationComponent } from './donation/donation.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'fundraiser', component: FundraiserComponent},
  {path: 'restoration', component: RestorationComponent},
  {path: 'donation', component: DonationComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FundraiserComponent,
    RestorationComponent,
    DonationComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatProgressBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
