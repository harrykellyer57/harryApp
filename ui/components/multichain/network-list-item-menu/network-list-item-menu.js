import React from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../hooks/useI18nContext';
import {
  Box,
  IconName,
  ModalFocus,
  Popover,
  PopoverPosition,
  PopoverRole,
  Text,
} from '../../component-library';
import { MenuItem } from '../../ui/menu';
import { IconColor, TextColor } from '../../../helpers/constants/design-system';

export const NetworkListItemMenu = ({
  anchorElement,
  onClose,
  onEditClick,
  onDeleteClick,
  onDiscoverClick,
  isOpen,
}) => {
  const t = useI18nContext();

  const handleClick = (callback) => (e) => {
    e.stopPropagation();
    callback();
    onClose();
  };

  return (
    <Popover
      className="multichain-network-list-item-menu__popover"
      onClickOutside={onClose}
      referenceElement={anchorElement}
      role={PopoverRole.Dialog}
      position={PopoverPosition.BottomEnd}
      offset={[8,0]}
      padding={0}
      isOpen={isOpen}
      isPortal
      preventOverflow
      flip
    >
      <ModalFocus restoreFocus initialFocusRef={anchorElement}>
        <Box>
          {onDiscoverClick && (
            <MenuItem
              iconName={IconName.Eye}
              onClick={handleClick(onDiscoverClick)}
              data-testid="network-list-item-options-discover"
            >
              <Text>{t('discover')}</Text>
            </MenuItem>
          )}
          {onEditClick && (
            <MenuItem
              iconName={IconName.Edit}
              onClick={handleClick(onEditClick)}
              data-testid="network-list-item-options-edit"
            >
              <Text>{t('edit')}</Text>
            </MenuItem>
          )}
          {onDeleteClick && (
            <MenuItem
              iconName={IconName.Trash}
              iconColor={IconColor.errorDefault}
              onClick={handleClick(onDeleteClick)}
              data-testid="network-list-item-options-delete"
            >
             <Text color={TextColor.errorDefault}>{t('delete')}</Text>
           </MenuItem>
         )}
       </Box>
     </ModalFocus>
   </Popover>
 );
};

NetworkListItemMenu.propTypes = {
 anchorElement: PropTypes.instanceOf(window.Element),
 onClose: PropTypes.func.isRequired,
 onEditClick: PropTypes.func,
 onDeleteClick: PropTypes.func, 
 onDiscoverClick: PropTypes.func, 
 isOpen: PropTypes.bool.isRequired, 
};
