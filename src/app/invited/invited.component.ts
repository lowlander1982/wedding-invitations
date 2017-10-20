import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-invited',
  templateUrl: './invited.component.html',
  styleUrls: ['./invited.component.css']
})

export class InvitedComponent implements OnInit {

  public invitationForm: FormGroup;

  private invitation: FirebaseObjectObservable<{
    family_head: string,
    email: string,
    phone: string,
    address: string,
    building_name: string,
    tower: string,
    apartment: string,
    city: string,
    country: string,
    significant_other: string,
    children: string[]
  }>;

  childrenForm: Array<string>;
  title = 'My first AGM project';
  cntLat = 4.086021;
  cntLng = -76.198183
  lat1 = 4.086021;
  lng1 = -76.198183;
  lat2 = 51.458418;
  lng2 = 7.459007;

  constructor(
    private af: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.invitationForm = this.fb.group({
      family_head:    ['', Validators.required ],
      significant_other:  ['', Validators.required ],
      children: [[]],
      rsvp: ['', Validators.required ],
      attendeeAdult: ['', Validators.required ],
      attendeeChildren: ['', Validators.required ],
      comments: ['']
    });

    this.route.params.subscribe(params => {
      this.invitation = this.af.object(`/invitations/${params['id']}`)

      this.invitation.subscribe(inv => {
        this.invitationForm.patchValue(inv);

        this.childrenForm = inv.children;
      });
    });
  }

  onSubmit() {
    console.log('entre');
  }

  saveRSVP(): void {
    this.invitationForm.value.children = this.childrenForm;

    this.invitation.update(this.invitationForm.value)
    .then(_ => console.log('Done!!'))
    .catch(err => console.log(err));
  }

}