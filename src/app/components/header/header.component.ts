import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title : string = "TicTacToe"
  @Output() onNewGame : EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  startNewGame(){
    console.log('invoking New Game');
    this.onNewGame.emit(true)
    
  }
  
}
