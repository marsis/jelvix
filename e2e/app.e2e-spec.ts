import { JelvixPage } from './app.po';

describe('jelvix App', () => {
  let page: JelvixPage;

  beforeEach(() => {
    page = new JelvixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
