import React, { useState } from 'react';
import useIsOverflowing from '../../../../../hooks/snaps/useIsOverflowing';
import {
  Box,
  Button,
  Text,
} from '../../../../component-library';
import { useI18nContext } from '../../../../../hooks/useI18nContext';

const NftDetailDescription = ({ value }) => {
  const t = useI18nContext();
  const { contentRef, isOverflowing } = useIsOverflowing();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      marginTop={2}
      className="nft-details__show-more"
      style={{
        position: 'relative',
        overflow: 'hidden',
        maxHeight: isOpen ? undefined : 'none'
      }}
      ref={contentRef}
    >
      <Text variant="bodySm" fontWeight="Medium" color="textAlternative">
        {value}
      </Text>
      {!isOpen && isOverflowing && (
        <Button paddingLeft={9} variant="Link" onClick={() => setIsOpen(!isOpen)}>
          <Text color="infoDefault">{t('showMore')}</Text>
        </Button>
      )}
    </Box>
  );
};

export default NftDetailDescription;
