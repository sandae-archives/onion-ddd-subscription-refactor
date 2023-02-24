import "dotenv/config";
import * as _ from "lodash";
import { Plan } from "./models/plan";
import { SubscriptionRepository } from "./repositories/subscriptionRepository";
import { CallerSubscriptionService } from "./services/callerSubscriptionService";
import { SubscriptionRefundService } from "./services/subscriptionRefundService";

// usage
(async () => {
  const subscriptionRepo = new SubscriptionRepository();
  const subscriptionRefundService = new SubscriptionRefundService();
  const mailService: any = undefined;
  const smsService: any = undefined;

  const service = new CallerSubscriptionService(
    subscriptionRepo,
    subscriptionRefundService,
    mailService,
    smsService
  );

  const caller: any = undefined;

  service.subscribe(caller, Plan.BASIC);
})();
