import { Caller } from "../models/caller";
import { ISubscription, Subscription } from "../models/subscription";

type isRefundable = (current: ISubscription, next: ISubscription) => boolean;

const isBasicAnnualRefundable: isRefundable = (
  current: ISubscription,
  next: ISubscription
) => next.isEqual(Subscription.PREMIUM_ANNUAL);

const isPremiumAnnualRefundable: isRefundable = (
  current: ISubscription,
  next: ISubscription
) => next.isEqual(Subscription.GOLD) || current.isLowerTier(next);

export class SubscriptionRefundService {
  private isRefundable(current: ISubscription, next: ISubscription): boolean {
    const refundMap = new Map<Buffer, isRefundable>([
      [Subscription.PREMIUM_ANNUAL.getHashCode(), isPremiumAnnualRefundable],
      [Subscription.BASIC_ANNUAL.getHashCode(), isBasicAnnualRefundable],
    ]);

    if (refundMap.has(current.getHashCode())) {
      return refundMap.get(current.getHashCode())!(current, next);
    }

    return false;
  }

  refund(caller: Caller, current: ISubscription, next: ISubscription) {
    if (this.isRefundable(current, next)) {
      // refund code
    }
  }
}
