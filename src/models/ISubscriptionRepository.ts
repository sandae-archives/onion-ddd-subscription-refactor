import { Plan } from "./plan";
import { Subscription } from "./subscription";

export interface ISubscriptionRepository {
  findOneByPlan(plan: Plan): Subscription;
}
