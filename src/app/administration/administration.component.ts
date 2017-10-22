import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  invitations$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    this.invitations$ = this.af.list('/invitations');
  }

}
