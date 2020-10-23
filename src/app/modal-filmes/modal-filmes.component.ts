import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-filmes',
  templateUrl: './modal-filmes.component.html',
  styleUrls: ['./modal-filmes.component.css']
})
export class ModalFilmesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

}