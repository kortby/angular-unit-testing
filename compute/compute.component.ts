import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compute',
  templateUrl: './compute.component.html',
  styleUrls: ['./compute.component.scss']
})
export class ComputeComponent implements OnInit {
  totalVote = 0;
  constructor() {}

  ngOnInit() {}

  computing(num: number) {
    if (num < 0) {
      return 0;
    }
    return num + 1;
  }

  greet(name) {
    return 'Welocome ' + name;
  }

  getCurrencies() {
    return ['USD', 'AUD', 'EUR'];
  }

  voteUp() {
    this.totalVote++;
  }

  voteDown() {
    this.totalVote--;
  }
}
