import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css']
})
export class FundraiserComponent {
  fundraiser = {
    title: '',
    des:'',
    city: '',
    photo: '',
    amount: '',
    name: '',
    card: '',
    date: '',
    cardpass: ''

  };
  saved = false;

// tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.fundraiser.title, this.fundraiser.des, this.fundraiser.city, this.fundraiser.photo, this.fundraiser.amount,
      this.fundraiser.name, this.fundraiser.card, this.fundraiser.date, this.fundraiser.cardpass);
    this.saved = true;
  }
}

