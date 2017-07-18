import { FreshInnoPage } from './app.po';

describe('fresh-inno App', () => {
  let page: FreshInnoPage;

  beforeEach(() => {
    page = new FreshInnoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
