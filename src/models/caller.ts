import { Subscription } from "./subscription";

export class Caller {
  get currentSubscription(): Subscription {
    return Subscription.BASIC_ANNUAL; // test
  }
}
