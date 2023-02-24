import { ISubscriptionRepository } from "../models/ISubscriptionRepository";
import { Plan } from "../models/plan";
import { Subscription } from "../models/subscription";

export class SubscriptionRepository implements ISubscriptionRepository {
  private subscriptions = [
    Subscription.BASIC_ANNUAL,
    Subscription.PREMIUM_ANNUAL,
  ];

  // replaces getSubscriptionByPlanName
  findOneByPlan(plan: Plan): Subscription {
    const subscription = this.subscriptions.find((subscription) =>
      subscription.hasPlan(plan)
    );

    if (!subscription) {
      throw new Error("This should not happen");
    }

    return subscription;
  }
}
