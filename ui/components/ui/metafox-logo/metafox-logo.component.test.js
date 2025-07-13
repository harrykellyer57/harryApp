
import React from 'react';
import { renderWithProvider } from '../../../../test/lib/render-helpers';
const MetaFoxLogo = () => <img src="."></img>;
jest.mock('./horizontal-logo.js', () => () => <div></div>);
describe('MetaFoxLogo', () => {
  it('matches snapshot with img width and height default 42', () => {
    const { container } = renderWithProvider(<MetaFoxLogo />);
    expect(container).toMatchSnapshot();
  });
  it('does not set icon size when unsetIconHeight is true', () => {
    const { container } = renderWithProvider(<MetaFoxLogo unsetIconHeight />);
    expect(container).toMatchSnapshot();
  });
});
