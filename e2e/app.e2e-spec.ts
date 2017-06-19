import { BuddhistCalendarPage } from './app.po';

describe('buddhist-calendar App', () => {
  let page: BuddhistCalendarPage;

  beforeEach(() => {
    page = new BuddhistCalendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
