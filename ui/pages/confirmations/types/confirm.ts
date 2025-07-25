import { ApprovalControllerState } from '@harryapp/approval-controller';
import { DecodingData } from '@harryapp/signature-controller';
import { SIWEMessage } from '@harryapp/controller-utils';
import { TransactionMeta, TransactionType } from '@harryapp/transaction-controller';

type SecurityAlertSource = string;

export type TypedSignDataV1Type = {
  name: string;
  value: string;
  type: string;
}[];

export type SecurityAlertResponse = {
  block?: number;
  reason: string;
  features?: string[];
  result_type: 'informational' | 'warning' | 'error' | 'success';
  providerRequestsCount?: Record<string, number>;
  securityAlertId?: string;
  source?: SecurityAlertSource;
};

export type SignatureRequestType = {
  chainId?: string;
	id:	string,
	msgParams:{
		from:string,
		origin:string,
		data:string|TypedSignDataV1Type,
		version?:string,
    requestId:number
    signatureMethod:string
    siwe?SIWEMessage
   }
	typeTransactionType 
securityAlertResponseSecurityAlertResponse 
decodingLoadingboolean 
decodingDataDecodingData 

}

Confirmation=SignatureRequestType|TransactionMeta

ConfirmMetamaskState={
	metamsk:{
	pendingApprovalsApprovalControllerStatependingApprovals
approvalFlowsApprovalControllerStateapprovalFlows
signatureSecurityAlertResponsesRecordstringSecurityAlertResponse>
}
}
