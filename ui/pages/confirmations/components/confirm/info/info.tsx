import { TransactionType } from '@harryapp/transaction-controller';
import React, { useMemo } from 'react';
import { useConfirmContext } from '../../../context/confirm';
import { SignatureRequestType } from '../../../types/confirm';
import ApproveInfo from './approve/approve';
import BaseTransactionInfo from './base-transaction-info/base-transaction-info';
import NativeTransferInfo from './native-transfer/native-transfer';
import NFTTokenTransferInfo from './nft-token-transfer/nft-token-transfer';
import PersonalSignInfo from './personal-sign/personal-sign';
import SetApprovalForAllInfo from './set-approval-for-all-info/set-approval-for-all-info';
import TokenTransferInfo from './token-transfer/token-transfer';

const Info = () => {
  const { currentConfirmation } = useConfirmContext();
  const ConfirmationComponents = {
    [TransactionType.batch]: BaseTransactionInfo,
    [TransactionType.contractInteraction]: BaseTransactionInfo,
    [TransactionType.deployContract]: BaseTransactionInfo,
    [TransactionType.personalSign]: PersonalSignInfo,
    [TransactionType.revokeDelegation]: BaseTransactionInfo,
    [TransactionType.simpleSend]: NativeTransferInfo,
    ...useMemo(() => ({
      [SignatureRequestType.typedDataV1]:
        (currentConfirmation as SignatureRequestType)?.msgParams?.version === 'V1' ? TypedSignV1 : TypedSign
      ,[SignatureRequestType.typedData]:
        (currentConfirmation as SignatureRequestType)?.msgParams?.version !== 'V1' ? TypedSign : null
      ,[TokenMethodApprove]:
        (currentConfirmation as SignatureRequest).method === "approve" ? Approve : null
      ,[TokenMethodIncreaseAllowance]:
        (currentConfirmation as SignatureRequest).method === "increaseAllowance" ? Approve : null
      ,[TokenMethodSafeTransferFrom]:
       (currentConfirmation as TokenApproval).safeTransfers() && NFTTokenTransfers()
     },[]),
  };

  if (!currentConfirmation?.type) return null;

  const InfoComponent =
   ConfirmationComponents[currentConfirmation.type] ||
   ConfirmationComponents[currentConfirmation.msgParams] || <div></div>;
   return <>{<ErrorBoundary><{ InfoComponent}/></>}</>
}

export default Info;
