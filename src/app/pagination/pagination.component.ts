import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent {
  pages = [];
  @Input() set numberPages(n: number) {
    this.pages = Array(n)
      .fill(0)
      .map((x, i) => i + 1);
  }
  start = 0;
  page = 1;
  @Output() navChange = new EventEmitter<number>();
  pageSlice(n: number) {
    this.start += n;
    if (this.start <= 0) {
      this.start = 0;
    }
    if (this.start >= this.pages.length) {
      this.start = this.pages.length - 5;
    }
  }
  onNavChange(n: number) {
    this.navChange.emit(n);
    this.page = n;
  }
  pagePrevious() {
    this.page -= this.page > 0 ? 1 : 0;
    this.onNavChange(this.page);
  }
  pageNext() {
    this.page += this.page < this.pages.length ? 1 : 0;
    this.onNavChange(this.page);
  }
}
