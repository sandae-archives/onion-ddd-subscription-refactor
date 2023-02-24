import { BillingCycle } from "./billingCycle";
import { Plan } from "./plan";
import { Tier } from "./tier";

export interface ISubscription {
  getIsFreeSubscription(): boolean;
  isLowerTier(other: ISubscription): boolean;
  isHigherTier(other: ISubscription): boolean;
  isEqualTier(other: ISubscription): boolean;
  isEqual(other: ISubscription): boolean;
  getHashCode(): Buffer;
}

export class Subscription implements ISubscription {
  public static readonly BASIC_ANNUAL = Subscription.create(
    BillingCycle.ANNUAL,
    new Set<Plan>([Plan.BASIC]),
    false,
    Tier.TIER_ONE
  );
  public static readonly PREMIUM_ANNUAL = Subscription.create(
    BillingCycle.ANNUAL,
    new Set<Plan>([Plan.PREMIUM]),
    false,
    Tier.TIER_ONE
  );
  public static readonly FREMIUM_ANNUAL = Subscription.create(
    BillingCycle.MONTHLY,
    new Set<Plan>([Plan.FREEMIUM]),
    true,
    Tier.TIER_ONE
  );
  public static readonly GOLD = Subscription.create(
    BillingCycle.MONTHLY,
    new Set<Plan>([Plan.GOLD]),
    false,
    Tier.TIER_TWO
  );

  private constructor(
    private readonly billingCycle: BillingCycle,
    private readonly plans: Set<Plan>,
    private readonly isFreeSubscription: boolean,
    private readonly tier: Tier
  ) {}

  getIsFreeSubscription(): boolean {
    return this.isFreeSubscription;
  }

  isHigherTier(other: ISubscription) {
    return false;
  }

  isEqualTier(other: ISubscription) {
    return true;
  }

  isLowerTier(other: ISubscription) {
    return true;
  }

  hasPlan(plan: Plan) {
    return this.plans.has(plan);
  }

  static create(
    billingCycle: BillingCycle,
    plans: Set<Plan>,
    isFreeSubscription: boolean,
    tier: Tier
  ): Subscription {
    // validations
    return new Subscription(billingCycle, plans, isFreeSubscription, tier);
  }

  getHashCode() {
    return Buffer.from(JSON.stringify(this), "base64");
  }

  isEqual(other: ISubscription) {
    return this.getHashCode() === other.getHashCode();
  }
}
