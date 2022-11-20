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
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    AdminComponent,
    PrivacyPolicyComponent,
    AddProductComponent,
    ModifyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
