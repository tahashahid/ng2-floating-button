import { Ng2FloatingButtonPage } from './app.po';

describe('ng2-floating-button App', function() {
  let page: Ng2FloatingButtonPage;

  beforeEach(() => {
    page = new Ng2FloatingButtonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
