export class Tier {
  public static readonly TIER_ONE = Tier.create(1, "One");
  public static readonly TIER_TWO = Tier.create(2, "Two");

  private constructor(
    public readonly value: number,
    public readonly description: string
  ) {}

  static create(value: number, description: string): Tier {
    // validations
    return new Tier(value, description);
  }
}
