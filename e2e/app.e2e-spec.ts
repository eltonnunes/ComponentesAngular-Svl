import { ComponentesAngularPage } from './app.po';

describe('componentes-angular App', () => {
  let page: ComponentesAngularPage;

  beforeEach(() => {
    page = new ComponentesAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
