import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: true,
})
export class AppFooter {
  render() {
    return (
      <ion-footer>作成日: 2020-05-26 作成者: Alice 承認者: Bob</ion-footer>
    );
  }
}
