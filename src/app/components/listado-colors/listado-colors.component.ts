import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

//plugins
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-listado-colors',
  templateUrl: './listado-colors.component.html',
  styleUrls: ['./listado-colors.component.css'],
})
export class ListadoColorsComponent implements OnInit {
  colors: any = [];
  page: number = 1;

  constructor(private _colorService: ColorService, private _clipboardService: ClipboardService) {
  }

  ngOnInit(): void {
    this.cargaGrid();
    console.log(this.colors);
  }
  
  anterior() {
    if (this.page === 1) return;
    this.page = this.page - 1;
    this.cargaGrid();
  }

  siguiente() {
    if (this.page === this.colors.total_pages) return;
    this.page = this.page + 1;
    this.cargaGrid();
  }

  cargaGrid() {
    this._colorService
      .getColors(this.page)
      .subscribe((colors) => (this.colors = colors));
  }

}
