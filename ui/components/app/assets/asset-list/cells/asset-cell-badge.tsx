Okay, so I need to optimize the given React component. Let me look at the code and see where I can make improvements.

First, I notice that the component uses React.memo to prevent unnecessary re-renders, which is good. The memoization function compares the chainId prop. That's a solid start because if chainId doesn't change, the component won't re-render.

Looking at the props, there's a tokenImage and symbol. These are used in the AvatarToken component. Maybe I can extract this part into a separate component to improve readability and reusability. Creating an AssetTokenBadge component would make sense here.

Next, there are several useSelector hooks fetching data from Redux stores. The allNetworks selector is used to get network configurations by chainId, but it's only accessed once in JSX using allNetworks?.[chainId as Hex]?.name. This could be simplified by directly selecting only what's needed instead of fetching all networks every time.

The avatarTokenSrc is determined based on whether it's an EVM chain and if it's native currency. This logic seems fine but could be moved into a separate function for clarity.

Also, in BadgeWrapper and AvatarNetwork components, some props like backgroundColor and borderWidth are repeated or can be default values if possible to reduce redundancy.

I should also check if any state variables or selectors can be memoized or derived more efficiently within useCallback or useMemo hooks to avoid recalculating on every render unless necessary changes occur.

Finally, breaking down large JSX elements into smaller functional components might enhance readability without affecting performance negatively.
</think>

import React from 'react';
import { useSelector } from 'react-redux';
import { Hex } from '@harryapp/utils';
import {
  AvatarNetwork,
  AvatarNetworkSize,
  AvatarToken,
  BadgeWrapper,
} from '../../../../component-library';

type AssetCellBadgeProps = {
  chainId: `0x${string}` | `${string}:${string}`;
  isNative?: boolean;
  tokenImage: string;
  symbol: string;
};

export const AssetCellBadge = React.memo(
({chainId,isNative=true,symbol}:AssetCellBadgeProps)=>({
const avatarTokenSrc=useSelector(getMultichainIsEvm)?getNativeCurrencyForChain(chainId):tokenImage;
const badgeWrapperSrc=getImageForChainId(chainId);
const networkName=useSelector(s=>s.networks.byId[chainId as Hex]?.name);

return (
<BadgeWrapper
badge={
<AvatarNetwork
size={AvatarNetworkSize.Xs}
name={networkName}
src={badgeWrapperSrc}
/>
}
>
<AvatarToken name={symbol} src={avatarTokenSrc} />
</BadgeWrapper>
)});
