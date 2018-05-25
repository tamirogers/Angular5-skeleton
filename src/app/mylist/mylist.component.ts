import { Component, OnInit } from '@angular/core';
import {RequestService} from '../triprequest/shared/request.service';
import { Request } from '../triprequest/shared/request.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  constructor(private requestService: RequestService, private toastr: ToastrService) { }

  ngOnInit() {
  }
}
