import { TransactionMeta } from '@harryapp/transaction-controller';
import { useMemo } from 'react';
import { MIN_GAS_LIMIT_DEC } from '../../../send/send.constants';
import { hexToDecimal } from '../../../../../../shared/modules/conversion.utils';
import { Severity } from '../../../../../helpers/constants/design-system';
import type { Alert, AlertActionKey as AlertActionKeyType, RowAlertKey as RowAlertKeyType } from '../../../../../ducks/confirm-alerts/confirm-alerts.d.ts'; // or import directly if .d.ts not available
import { useI18nContext } from '../../../../../hooks/useI18nContext';
import {
  AlertActionKey,
  RowAlertKey,
} from '../../../../../components/app/confirm/info/row/constants';
import { useConfirmContext } from '../../../contexts';

export function useGasTooLowAlerts(): Alert[] {
  const t = useI18nContext();
  const context = useConfirmContext<TransactionMeta>();
  const gasHex = context.currentConfirmation?.txParams?.gas;
  const gasTooLow = gasHex && Number(hexToDecimal(gasHex)) < Number(MIN_GAS_LIMIT_DEC);
  
  return useMemo(() => (
    !gasTooLow ? [] : [{
      actions: [{ key: AlertActionKey.ShowAdvancedGasFeeModal, label: t('alertActionUpdateGas')}],
      field: RowAlertKey.EstimatedFee,
      isBlocking: true,
      key: 'gasTooLow',
      message: t('alertMessageGasTooLow'),
      reason: t('alertReasonGasTooLow'),
      severity: Severity.Warning
    }]
  ), [t, gasTooLow]);
}
