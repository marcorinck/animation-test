import { AnimationTestPage } from './app.po';

describe('animation-test App', () => {
  let page: AnimationTestPage;

  beforeEach(() => {
    page = new AnimationTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
