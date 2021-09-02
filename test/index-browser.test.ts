import { browser, node, Session } from '../index-browser';

describe('index-browser', () => {
  describe('Session', () => {
    it('can be constructed', async() => {
      const session = new Session();
      expect(session.info.isLoggedIn).toBeFalsy();
    });
  });

  describe('helpers flags', () => {
    it('node is false', async() => {
      expect(node).toBeFalsy();
    });

    it('browser is true', async() => {
      expect(browser).toBeTruthy();
    });
  });
});
