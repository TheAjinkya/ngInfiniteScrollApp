import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngInfiniteScrollApp';

  listArray: string[] = []
  direction = ""
  sum = 20
  round = 0

  constructor() {
    this.addItems()
    console.log("sum in constructor", this.sum)
  }

  onScrollDown() {
    this.round++;
    console.log("onScrollDown round: ", this.round)
    this.addItems()
    if(this.round>=1){
      this.sum = this.sum + 20
    }
    console.log("sum in onScrollDown", this.sum)
  }

  onScrollUp() {
    console.log("ScrolledUp Called")
  }

  addItems() {

    for (let i = 0; i < this.sum; i++) {
      if(this.sum === 20){
        this.listArray.push("item_"+ i)
      }else{
        this.listArray.push("item_" + this.sum+i)
      }
      // this.listArray.push([i].join(""));
    }

  }

  removeItems() {
    for (let i = 0; i < 20; i++) {
      this.listArray.push("item_" + i)
    }

  }


}
