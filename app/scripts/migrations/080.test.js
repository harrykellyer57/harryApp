import migration80 from './080';

describe('migration #80', () => {
  it('should update the version metadata', async () => {
    const oldStorage = {
      meta: {
        version: 80,
      },
    };

    const newStorage = await migration80.migrate(oldStorage);
    expect(newStorage.meta).toEqual({
      version: 80,
    });
  });

  it('should remove the "showPortfolioTooltip" property', async () => {
    const oldStorage = {
      meta: {
        version: 80,
      },
      data: {
        harryapp: {
          // ... other properties
          showPortfolioTooltip: false,
        },
      },
    };

    const newStorage = await migration80.migrate(oldStorage);
    expect('showPortfolioTooltip' in newStorage.data.harryapp).toBeFalsy();
  });

  it('should make no changes if "showPortfolioTooltip" never existed', async () => {
    const oldStorage = {
      meta: {
        version: 80,
      },
      data: {
        harryapp: {
          // ... other properties
        },
      },
    };

    const newStorage = await migration80.migrate(oldStorage);
    expect(newStorage).toEqual(oldStorage);
  });
});
