import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './_guards/auth.guard';
import { HomeComponent } from './_components/home/home.component';
import { WalletComponent } from './_components/wallet/wallet.component';




const routes: Routes = [
 { path: "", component: WalletComponent, },


  //Create NotFound Component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
