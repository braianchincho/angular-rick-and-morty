export class Info {
  count: number;
  pages: number;
  constructor(count: number, pages: number) {
    this.count = count || 0;
    this.pages = pages || 0;
  }
}
