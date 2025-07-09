import type { BridgeHistoryItem } from '@harryapp/bridge-status-controller';
import { StatusTypes } from '@harryapp/bridge-controller';
import { MINUTE } from '../../../../shared/constants/time';
import { getIsDelayed } from './tx-details';

describe('tx-details utils', () => {
  describe('getIsDelayed', () => {
    it.each([
      [StatusTypes.COMPLETE, { startTime: Date.now(), estimatedProcessingTimeInSeconds: 60 }, false],
      [StatusTypes.PENDING, undefined, false],
      [StatusTypes.PENDING, { startTime: undefined, estimatedProcessingTimeInSeconds: 60 }, false],
      [StatusTypes.PENDING, { startTime: Date.now() - 1000, estimatedProcessingTimeInSeconds: 60 }, false],
      [
        StatusTypes.PENDING,
        { startTime: Date.now() - 61 * 1000 - 10 * MINUTE, estimatedProcessingTimeInSeconds: 60 },
        true,
      ],
      [
        StatusTypes.PENDING,
        { startTime: Date.now() - 61 * 1000, estimatedProcessingTimeInSeconds: 60 },
        false,
      ],
    ])('returns %p when status is %p and bridgeHistoryItem is %p', (status, item, expected) => {
      expect(getIsDelayed(status as unknown as StatusTypes, item as BridgeHistoryItem | undefined)).toBe(expected);
    });
  });
});
