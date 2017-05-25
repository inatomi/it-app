import { ItAppPage } from './app.po';

describe('it-app App', () => {
  let page: ItAppPage;

  beforeEach(() => {
    page = new ItAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
