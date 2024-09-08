import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver'
import Groq from "groq-sdk";
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}