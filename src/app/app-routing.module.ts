import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuGeneralComponent } from './components/menu-general/menu-general.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserDataComponent } from './components/user-data/user-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu-general', component: MenuGeneralComponent },
  { path: 'menu-home', component: MenuHomeComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'user-data', component: UserDataComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'modify-product', component: ModifyProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
