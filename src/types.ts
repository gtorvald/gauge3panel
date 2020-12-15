type Color = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple';

export interface SimpleOptions {
  firstMin: number;
  firstMax: number;
  secondMin: number;
  secondMax: number;
  thirdMin: number;
  thirdMax: number;
  firstColor: Color;
  secondColor: Color;
  thirdColor: Color;
}
