 ```javascript
import { migrate as migrate021 } from './021';
import wallet2 from '../../../test/lib/migrations/002.json';

describe('wallet2 is migrated successfully without the BlacklistController', () => {
  it('should delete BlacklistController key', async () => {
    const { meta: { version }, data: { BlacklistController, RecentBlocks } } = await migrate021(wallet2);
    expect(version).toBe(21);
    expect(BlacklistController).toBeUndefined();
    expect(RecentBlocks).toBeUndefined();
  });
});```
