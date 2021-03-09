//           'red'     | 'green'   | 'blue'    | 'yellow'  | 'orange'  | 'purple';
type Color = '#ed485b' | '#73bf69' | '#5794f2' | '#fadf4b' | '#f3973e' | '#b877d9';
type TypeMax = 'users' | 'max' | 'maxRound' | 'otherBaseValue';
type Database = 'A' | 'B' | 'C';
type Threshold = 'absolute' | 'percentage';

export interface SimpleOptions {
  firstMin: number;
  typeFirstMax: TypeMax;
  typeFirstMaxDataBase: Database;
  firstMax: number;
  firstColor: Color;
  useThirdThreshold: boolean | undefined;
  typeFirstThreshold: Threshold;
  firstThresholdValue: number;
  firstThresholdColor: Color;
  secondMin: number;
  typeSecondMax: TypeMax;
  typeSecondMaxDataBase: Database;
  secondMax: number;
  secondColor: Color;
  useSecondThreshold: boolean | undefined;
  typeSecondThreshold: Threshold;
  secondThresholdValue: number;
  secondThresholdColor: Color;
  thirdMin: number;
  typeThirdMax: TypeMax;
  typeThirdMaxDataBase: Database;
  thirdMax: number;
  thirdColor: Color;
  useFirstThreshold: boolean | undefined;
  typeThirdThreshold: Threshold;
  thirdThresholdValue: number;
  thirdThresholdColor: Color;
}
