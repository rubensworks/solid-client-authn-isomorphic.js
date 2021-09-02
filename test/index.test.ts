// eslint-disable-next-line unicorn/import-index
import { browser, node, Session } from '../index';

describe('index', () => {
  describe('Session', () => {
    it('can be constructed', async() => {
      const session = new Session();
      expect(session.info.isLoggedIn).toBeFalsy();
    });
  });

  describe('helpers flags', () => {
    it('node is true', async() => {
      expect(node).toBeTruthy();
    });

    it('browser is false', async() => {
      expect(browser).toBeFalsy();
    });
  });
});
