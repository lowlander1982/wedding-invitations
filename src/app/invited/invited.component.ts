import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-invited',
  templateUrl: './invited.component.html',
  styleUrls: ['./invited.component.css']
})
export class InvitedComponent implements OnInit {

  invitation: FirebaseObjectObservable<{
    family_head:string,
    email:string,
    phone:string,
    address:string,
    building_name:string,
    tower:string,
    apartment:string,
    city:string,
    country:string,
    significant_other:string,
    children:string[]
  }>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((invitationId) => {
        this.invitation = this.db.object(`/invitations/${invitationId.get('id')}`);
    });
  }

  onSubmit() {
    console.log('entre');
  }

}
