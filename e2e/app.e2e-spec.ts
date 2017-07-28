import { BootPortPage } from './app.po';

describe('boot-port App', () => {
  let page: BootPortPage;

  beforeEach(() => {
    page = new BootPortPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
