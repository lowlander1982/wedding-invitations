import { WeddingInvitationsPage } from './app.po';

describe('wedding-invitations App', () => {
  let page: WeddingInvitationsPage;

  beforeEach(() => {
    page = new WeddingInvitationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
