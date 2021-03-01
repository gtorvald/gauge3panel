type Color = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple';
type Threshold = 'absolute' | 'percentage';

export interface SimpleOptions {
  firstMin: number;
  firstMax: number;
  firstColor: Color;
  useThirdThreshold: boolean | undefined;
  typeFirstThreshold: Threshold;
  firstThresholdValue: number;
  firstThresholdColor: Color;
  secondMin: number;
  secondMax: number;
  secondColor: Color;
  useSecondThreshold: boolean | undefined;
  typeSecondThreshold: Threshold;
  secondThresholdValue: number;
  secondThresholdColor: Color;
  thirdMin: number;
  thirdMax: number;
  thirdColor: Color;
  useFirstThreshold: boolean | undefined;
  typeThirdThreshold: Threshold;
  thirdThresholdValue: number;
  thirdThresholdColor: Color;
}
