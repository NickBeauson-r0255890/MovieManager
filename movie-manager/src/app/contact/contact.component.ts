import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  details = '';
  message = '';
  sending = false;

  constructor(private router: Router) { }

  send() {
      this.sending = true;
      this.details = 'Sending Message...';

      setTimeout(() => {
        this.sending = false;
        this.closePopup();
      }, 1000);
    }

    cancel() {
      this.closePopup();
    }

    closePopup() {
      // Providing a `null` value to the named outlet
      // clears the contents of the named outlet
      this.router.navigate([{ outlets: { popup: null }}]);
    }

}
