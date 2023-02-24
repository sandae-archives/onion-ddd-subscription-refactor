import { Caller } from "../models/caller";
import { ISubscriptionRepository } from "../models/ISubscriptionRepository";
import { Plan } from "../models/plan";
import { SubscriptionRefundService } from "./subscriptionRefundService";

export class CallerSubscriptionService {
  constructor(
    private readonly subscriptionRepo: ISubscriptionRepository,
    private readonly refundService: SubscriptionRefundService,
    private readonly mailService: any,
    private readonly smsService: any
  ) {}

  subscribe(caller: Caller, plan: Plan) {
    const nextSubscription = this.subscriptionRepo.findOneByPlan(plan);
    const currentSubscription = caller.currentSubscription;

    this.refundService.refund(caller, currentSubscription, nextSubscription);
  }
}
