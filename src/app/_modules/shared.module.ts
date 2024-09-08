import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { PaginationModule } from 'ngx-bootstrap/pagination';
//import {SocketIoModule} from 'ngx-socket-io'
import { BaseChartDirective } from 'ng2-charts';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    DataTablesModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" }),
    TimepickerModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: "line-scale-party" }),
    FileUploadModule,
    SweetAlert2Module.forRoot(),
    PaginationModule.forRoot(),
    BaseChartDirective,

    

  ],
  exports: [
    
    TabsModule,
    DataTablesModule,
    ModalModule,
    FileUploadModule,
    ToastrModule,
    NgxSpinnerModule,
    TimepickerModule,
    SweetAlert2Module,
    PaginationModule,
    BaseChartDirective,
    //   SocketIoModule
  ]
})
export class SharedModule { }
