import { DomPage } from './app.po';

describe('dom App', () => {
  let page: DomPage;

  beforeEach(() => {
    page = new DomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
