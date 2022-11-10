import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { MenuGeneralComponent } from './components/menu-general/menu-general.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { ChatComponent } from './components/chat/chat.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { UserDataComponent } from './components/user-data/user-data.component';
import { BannerComponent } from './components/banner/banner.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    ProfileComponent,
    NotificationsComponent,
    LoginComponent,
    SignUpComponent,
    MenuHomeComponent,
    MenuGeneralComponent,
    RecommendedComponent,
    ChatComponent,
    UserDataComponent,
    BannerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
