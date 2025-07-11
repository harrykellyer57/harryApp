import {
  KeyringControllerSignTypedMessageAction,
  SignTypedDataVersion,
} from '@harryapp/keyring-controller';
import { Messenger } from '@harryapp/base-controller';
import { TransactionControllerInitMessenger } from '../../controller-init/messengers/transaction-controller-messenger';
import {
  Delegation,
  Execution,
  ExecutionMode,
  encodeRedeemDelegations,
} from './delegation';

const FROM_MOCK = '0x123456789012345678901234567890123456789a';
const CHAIN_ID_MOCK = '0x123';

const DELEGATION_MOCK: Delegation = {
  authority:
    '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  caveats: [
    {
      enforcer: '0x123456789012345678901234567890123456789b',
      terms: '0xABCDEF',
      args: 'argsVal',
    },
  ],
};

const EXECUTION_MOCK_1: Execution = {
  target: FROM_MOCK.toLowerCase(),
};

describe('Delegation Utils', () => {
  
});

```
