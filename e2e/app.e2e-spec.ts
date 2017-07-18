import { CleantmpPage } from './app.po';

describe('cleantmp App', () => {
  let page: CleantmpPage;

  beforeEach(() => {
    page = new CleantmpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
