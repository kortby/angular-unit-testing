import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  totalVotes = 0;
  @Output() voteChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
