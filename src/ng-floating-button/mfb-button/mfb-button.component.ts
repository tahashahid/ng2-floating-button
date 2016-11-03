import { Component, Input, OnInit  } from '@angular/core';
import { MfbButton } from './mfb-button';

@Component({
  selector: '[mfb-button]',
  templateUrl: './mfb-button.component.html',
  styleUrls: ['./mfb-button.component.sass']
})
export class MfbButtonComponent implements OnInit {
  @Input() button: MfbButton;
  
  buttonClick(){
    this.button.onClick();
    return false;
  }

  ngOnInit() {
  }

}
