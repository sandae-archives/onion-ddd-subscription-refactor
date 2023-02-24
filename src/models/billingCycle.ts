enum PeriodType {
  DAY,
  MONTH,
  YEAR,
}

export class BillingCycle {
  public static readonly ANNUAL = BillingCycle.create(1, PeriodType.YEAR);
  public static readonly MONTHLY = BillingCycle.create(1, PeriodType.MONTH);

  private constructor(
    public readonly periodNum: number,
    public readonly periodType: PeriodType
  ) {}

  static create(periodNum: number, periodType: PeriodType): BillingCycle {
    // validations
    return new BillingCycle(periodNum, periodType);
  }
}
