import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './_modules/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CurrencyPipe } from '@angular/common';
import { JwtInterceptor } from './_interceptor/jwt.interceptor';
import { ErrorInterceptor } from './_interceptor/error.interceptor';

import { LoadingInterceptor } from './_interceptor/loading.interceptor';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './_components/home/home.component';
import { TopBarComponent } from './_components/layout/top-bar/top-bar.component';
import { LogoComponent } from './_components/misc/logo/logo.component';
import { SideBarComponent } from './_components/layout/side-bar/side-bar.component';
import { MessageComponent } from './_components/misc/icons/message/message.component';
import { NotificationIconComponent } from './_components/misc/icons/notification-icon/notification-icon.component';
import { LogoMobileComponent } from './_components/misc/logo-mobile/logo-mobile.component';
import { WalletComponent } from './_components/wallet/wallet.component';
import { BalanceSectionComponent } from './_components/elements/balance-section/balance-section.component';
import { BitcoinIconComponent } from './_components/misc/icons/bitcoin-icon/bitcoin-icon.component';
import { EthereumIconComponent } from './_components/misc/icons/ethereum-icon/ethereum-icon.component';
import { BinanceIconComponent } from './_components/misc/icons/binance-icon/binance-icon.component';
import { UsdIconComponent } from './_components/misc/icons/usd-icon/usd-icon.component';
import { UsFlagIconComponent } from './_components/misc/icons/us-flag-icon/us-flag-icon.component';
import { SelectComponent } from './_components/misc/select/select.component';
import { ExchangeComponent } from './_components/elements/exchange/exchange.component';
import { LineGraphComponent } from './_components/elements/line-graph/line-graph.component';
import { ChartBoxComponent } from './_components/elements/chart-box/chart-box.component';
import { AccountCardsComponent } from './_components/elements/account-cards/account-cards.component';
import { CarouselComponent } from './_components/misc/carousel/carousel.component';
import { CardItemComponent } from './_components/misc/card-item/card-item.component';
import { TransactionsComponent } from './_components/elements/transactions/transactions.component';
import { CryptoBalanceComponent } from './_components/elements/crypto-balance/crypto-balance.component';
import { UsaIconComponent } from './_components/misc/icons/usa-icon/usa-icon.component';
import { SideBarMobileComponent } from './_components/layout/side-bar-mobile/side-bar-mobile.component';
import { ToggleDarknessComponent } from './_components/misc/toggle-darkness/toggle-darkness.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    LogoComponent,
    SideBarComponent,
    MessageComponent,
    NotificationIconComponent,
    LogoMobileComponent,
    WalletComponent,
    BalanceSectionComponent,
    BitcoinIconComponent,
    EthereumIconComponent,
    BinanceIconComponent,
    UsdIconComponent,
    UsFlagIconComponent,
    SelectComponent,
    ExchangeComponent,
    LineGraphComponent,
    ChartBoxComponent,
    AccountCardsComponent,
    CarouselComponent,
    CardItemComponent,
    TransactionsComponent,
    CryptoBalanceComponent,
    UsaIconComponent,
    SideBarMobileComponent,
    ToggleDarknessComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
