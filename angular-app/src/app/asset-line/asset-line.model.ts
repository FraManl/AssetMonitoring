export class AssetLine {
  public code: string;
  public isIn: string;
  public volume: number;
  public unitPrice: number;
  public totalFees: number;
  public valorisationT0: number;
  public valorisationToDate: number;

  constructor(
    code: string,
    isIn: string,
    vol: number,
    up: number,
    totalFees: number,
    valT0: number,
    valToDate: number
  ) {
    this.code = code;
    this.isIn = isIn;
    this.volume = vol;
    this.unitPrice = up;
    this.totalFees = totalFees;
    this.valorisationT0 = valT0;
    this.valorisationToDate = valToDate;
  }
}
