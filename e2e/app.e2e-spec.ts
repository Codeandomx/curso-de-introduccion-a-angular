import { CursoDeIntroduccionAAngularPage } from './app.po';

describe('curso-de-introduccion-a-angular App', () => {
  let page: CursoDeIntroduccionAAngularPage;

  beforeEach(() => {
    page = new CursoDeIntroduccionAAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
