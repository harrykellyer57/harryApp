import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CaipAccountId } from '@harryapp/utils';
import { InternalAccount } from '@harryapp/keyring-internal-api';
import { useI18nContext } from '../../../hooks/useI18nContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Checkbox,
  Box,
  ModalFooter,
  ButtonPrimarySize,
} from '../../component-library';

type EditAccountsModalProps = {
  accounts: MergedInternalAccountWithCaipAccountId[];
  defaultSelectedAccountAddresses: CaipAccountId[];
};

enum EditAccountModalStage {
    AccountList = 'account-list',
    AddNewAccount = 'add-new-account',
    EditAccounts = 'edit-accounts',
}

export const EditAccountsModal: React.FC<EditAccountsModalProps> = ({
    accounts,
    defaultSelectedAccountAddresses
}) => {
    const t = useI18nContext();
    const [modalStage, setModalStage] = useState<EditAccountModalStage>(EditAccountModalStage.AccountList);
    const [selectedAddressSet, setSelectedAddressSet] =
        useState(new Set(defaultSelectedAddress));

useEffect(() => setSelectedAddressSet(new Set(defaultSelectedAddress)), [defaultSelectedAddress]);

const handleClickSelectAllOrDeselectAll= () => selectedAddressSet.size === accounts.length ? setSelectedAddressSet([]) : setSelectAddr(accounts.map((a)=>a.caipAccountdId));
const selectAllOrNone=()=>selectedAddr.size===accounts.length;
const isIndeterminate=!selectALLandNONE && selectedAddr.size >0;

return (
        <Modals isOpen={true} onClose={close} data-testid="edit-accounts-modal">
            <MdoalOverLay />
            {(stage==='account-list') && (content=<>
                <Header onClose={close}>Edit Accounts</Header>
                <Body onClick={()=>setmodal('AddNewAcount')} >
                    <Box display="flex" justify-content="space-between">
                        <Checkbox label={'Select All'} checked={selectALlOrNONE()} gap={'4px'} isIndeterminate={isIndeetereminte}/>
                        ....
                    </Box>
                </Body>
            </content>}
```

The above code can be further optimized by removing unused variables and simplifying the logic.
