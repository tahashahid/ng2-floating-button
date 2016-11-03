import { Component, Input, OnInit } from '@angular/core';
import { MfbButton } from './mfb-button/mfb-button';

@Component({
  selector: 'ng2-floating-button',
  templateUrl: './ng-floating-button.component.html',
  styleUrls: ['./mfb.scss', './ng-floating-button.component.sass']
})
export class NgFloatingButtonComponent implements OnInit {
  isOpen: boolean = false;
  state: string = 'closed';
  
  @Input() placement: string;
  @Input() effect: string;
  @Input() label: string;
  @Input() iconClass: string;
  @Input() activeIconClass: string;
  @Input() toggle: string = 'click'; 
  @Input() buttons: Array<MfbButton>;

  constructor() { }

  clicked(){
    if(this.toggle != 'click') return false;
    this.isOpen = !this.isOpen;
    if(this.isOpen){
      this.state = 'open';
    }else{
      this.state = 'closed';
    }
  }

  entered(){
    if(this.toggle != 'hover') return false;
    this.state = 'open';
  }

  leaved(){
    if(this.toggle != 'hover') return false;
    this.state = 'closed';
  }

  ngOnInit() {
  }

}
