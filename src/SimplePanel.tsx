import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';

const colorGray = '#202226';
const colorGreen = '#73bf69';
const colorRed = '#ed485b';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  let firstColor: string;
  let firstThresholdColor: string;
  let secondColor: string;
  let secondThresholdColor: string;
  let thirdColor: string;
  let thirdThresholdColor: string;
  let thresholdColor = colorRed;
  switch (options.firstColor) {
    case 'red':
      firstColor = '#ed485b';
      break;
    case 'green':
      firstColor = '#73bf69';
      break;
    case 'blue':
      firstColor = '#5794f2';
      break;
    case 'orange':
      firstColor = '#f3973e';
      break;
    case 'purple':
      firstColor = '#b877d9';
      break;
    case 'yellow':
      firstColor = '#fadf4b';
      break;
  }
  switch (options.firstThresholdColor) {
    case 'red':
      firstThresholdColor = '#ed485b';
      break;
    case 'green':
      firstThresholdColor = '#73bf69';
      break;
    case 'blue':
      firstThresholdColor = '#5794f2';
      break;
    case 'orange':
      firstThresholdColor = '#f3973e';
      break;
    case 'purple':
      firstThresholdColor = '#b877d9';
      break;
    case 'yellow':
      firstThresholdColor = '#fadf4b';
      break;
  }
  switch (options.secondColor) {
    case 'red':
      secondColor = '#ed485b';
      break;
    case 'green':
      secondColor = '#73bf69';
      break;
    case 'blue':
      secondColor = '#5794f2';
      break;
    case 'orange':
      secondColor = '#f3973e';
      break;
    case 'purple':
      secondColor = '#b877d9';
      break;
    case 'yellow':
      secondColor = '#fadf4b';
      break;
  }
  switch (options.secondThresholdColor) {
    case 'red':
      secondThresholdColor = '#ed485b';
      break;
    case 'green':
      secondThresholdColor = '#73bf69';
      break;
    case 'blue':
      secondThresholdColor = '#5794f2';
      break;
    case 'orange':
      secondThresholdColor = '#f3973e';
      break;
    case 'purple':
      secondThresholdColor = '#b877d9';
      break;
    case 'yellow':
      secondThresholdColor = '#fadf4b';
      break;
  }
  switch (options.thirdColor) {
    case 'red':
      thirdColor = '#ed485b';
      break;
    case 'green':
      thirdColor = '#73bf69';
      break;
    case 'blue':
      thirdColor = '#5794f2';
      break;
    case 'orange':
      thirdColor = '#f3973e';
      break;
    case 'purple':
      thirdColor = '#b877d9';
      break;
    case 'yellow':
      thirdColor = '#fadf4b';
      break;
  }
  switch (options.thirdThresholdColor) {
    case 'red':
      thirdThresholdColor = '#ed485b';
      break;
    case 'green':
      thirdThresholdColor = '#73bf69';
      break;
    case 'blue':
      thirdThresholdColor = '#5794f2';
      break;
    case 'orange':
      thirdThresholdColor = '#f3973e';
      break;
    case 'purple':
      thirdThresholdColor = '#b877d9';
      break;
    case 'yellow':
      thirdThresholdColor = '#fadf4b';
      break;
  }
  const scale = Math.min(height, width / 2);
  const heightUse = scale * 0.8;
  const outRadius = scale * 0.75;
  const outWidth = Math.min(5, scale / 45);
  const mainWidth = Math.min(15, scale / 15);
  const firstRadius = outRadius - outWidth * 2 - 1;
  const secondRadius = firstRadius - mainWidth - 1;
  const thirdRadius = secondRadius - mainWidth - 1;
  const fontSizeValue = Math.min(45, scale / 5);
  const fontSizeBaseName = Math.min(15, scale / 15);
  const mainArc = 210 / 360;
  let firstValue = 0;
  let secondValue = 0;
  let thirdValue = 0;
  let firstBaseName: string | undefined = 'null base';
  let secondBaseName: string | undefined = 'null base';
  let thirdBaseName: string | undefined = 'null base';
  const rotate = 'rotate(-195 ' + width / 2 + ' ' + heightUse + ')';
  // обработка пороговых значений
  let dashArray = String(outRadius * Math.PI * 2 * mainArc);
  let firstThresholdArc = 1;
  let secondThresholdArc = 1;
  let thirdThresholdArc = 1;
  if (options.useFirstThreshold) {
    if (options.typeFirstThreshold === 'absolute') {
      if (options.firstThresholdValue < options.firstMin) {
        options.firstThresholdValue = options.firstMin;
      } else if (options.firstThresholdValue > options.firstMax) {
        options.firstThresholdValue = options.firstMax;
      }
      firstThresholdArc = (options.firstThresholdValue - options.firstMin) / (options.firstMax - options.firstMin);
    } else {
      if (options.firstThresholdValue < 0) {
        options.firstThresholdValue = 0;
      } else if (options.firstThresholdValue > 100) {
        options.firstThresholdValue = 100;
      }
      firstThresholdArc = options.firstThresholdValue / 100;
    }
  }
  if (options.useSecondThreshold) {
    if (options.typeSecondThreshold === 'absolute') {
      if (options.secondThresholdValue < options.secondMin) {
        options.secondThresholdValue = options.secondMin;
      } else if (options.secondThresholdValue > options.secondMax) {
        options.secondThresholdValue = options.secondMax;
      }
      secondThresholdArc = (options.secondThresholdValue - options.secondMin) / (options.secondMax - options.secondMin);
    } else {
      if (options.secondThresholdValue < 0) {
        options.secondThresholdValue = 0;
      } else if (options.secondThresholdValue > 100) {
        options.secondThresholdValue = 100;
      }
      secondThresholdArc = options.secondThresholdValue / 100;
    }
  }
  if (options.useThirdThreshold) {
    if (options.typeThirdThreshold === 'absolute') {
      if (options.thirdThresholdValue < options.thirdMin) {
        options.thirdThresholdValue = options.thirdMin;
      } else if (options.thirdThresholdValue > options.thirdMax) {
        options.thirdThresholdValue = options.thirdMax;
      }
      thirdThresholdArc = (options.thirdThresholdValue - options.thirdMin) / (options.thirdMax - options.thirdMin);
    } else {
      if (options.thirdThresholdValue < 0) {
        options.thirdThresholdValue = 0;
      } else if (options.thirdThresholdValue > 100) {
        options.thirdThresholdValue = 100;
      }
      thirdThresholdArc = options.thirdThresholdValue / 100;
    }
  }
  let thresholdArc = Math.min(firstThresholdArc, secondThresholdArc, thirdThresholdArc);
  switch (thresholdArc) {
    case firstThresholdArc:
      thresholdColor = firstThresholdColor;
      break;
    case secondThresholdArc:
      thresholdColor = secondThresholdColor;
      break;
    case thirdThresholdArc:
      thresholdColor = thirdThresholdColor;
      break;
  }
  if (thresholdArc < 1) {
    let dashValue = outRadius * Math.PI * 2 * mainArc * thresholdArc;
    let dashBalance = outRadius * Math.PI * 2 - dashValue;
    dashArray = dashValue + ' ' + dashBalance;
  }
  // считывание баз данных
  const radii = data.series
    .filter(series => series.refId === 'A')
    .map(series => {
      firstBaseName = series.name;
      return series;
    })
    .map(series => series.fields.find(field => field.type === 'number'))
    .map(field => field?.values.get(field.values.length - 1));
  const radiiB = data.series
    .filter(series => series.refId === 'B')
    .map(series => {
      secondBaseName = series.name;
      return series;
    })
    .map(series => series.fields.find(field => field.type === 'number'))
    .map(field => field?.values.get(field.values.length - 1));
  const radiiC = data.series
    .filter(series => series.refId === 'C')
    .map(series => {
      thirdBaseName = series.name;
      return series;
    })
    .map(series => series.fields.find(field => field.type === 'number'))
    .map(field => field?.values.get(field.values.length - 1));
  return (
    <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <g transform={rotate}>
        <circle
          id="fon"
          r={outRadius}
          cx={width / 2}
          cy={heightUse}
          stroke={thresholdColor}
          stroke-width={outWidth}
          stroke-dasharray={outRadius * Math.PI * 2 * mainArc}
          fill="none"
        />
        <circle
          id="fon"
          r={outRadius}
          cx={width / 2}
          cy={heightUse}
          stroke={colorGreen}
          stroke-width={outWidth}
          stroke-dasharray={dashArray}
          fill="none"
        />
        <circle
          id="fon"
          r={firstRadius}
          cx={width / 2}
          cy={heightUse}
          stroke={colorGray}
          stroke-width={mainWidth}
          stroke-dasharray={firstRadius * Math.PI * 2 * mainArc}
          fill="none"
        />
        <circle
          id="fon"
          r={secondRadius}
          cx={width / 2}
          cy={heightUse}
          stroke={colorGray}
          stroke-width={mainWidth}
          stroke-dasharray={secondRadius * Math.PI * 2 * mainArc}
          fill="none"
        />
        <circle
          id="fon"
          r={thirdRadius}
          cx={width / 2}
          cy={heightUse}
          stroke={colorGray}
          stroke-width={mainWidth}
          stroke-dasharray={thirdRadius * Math.PI * 2 * mainArc}
          fill="none"
        />
        {radii.map(value => {
          if (value < options.firstMin) {
            value = options.firstMin;
          } else if (value > options.firstMax) {
            value = options.firstMax;
          }
          firstValue = Math.round(value);
          let arc = (firstValue - options.firstMin) / (options.firstMax - options.firstMin);
          if (arc > firstThresholdArc) {
            firstColor = thresholdColor;
          }
          let dashValue = firstRadius * Math.PI * 2 * mainArc * arc;
          let dashBalance = firstRadius * Math.PI * 2 - dashValue;
          let dashArray = dashValue + ' ' + dashBalance;
          return (
            <circle
              id="fon"
              r={firstRadius}
              cx={width / 2}
              cy={heightUse}
              stroke={firstColor}
              stroke-width={mainWidth}
              stroke-dasharray={dashArray}
              fill="none"
            />
          );
        })}
        {radiiB.map(value => {
          if (value < options.secondMin) {
            value = options.secondMin;
          } else if (value > options.secondMax) {
            value = options.secondMax;
          }
          secondValue = Math.round(value);
          let arc = (secondValue - options.secondMin) / (options.secondMax - options.secondMin);
          if (arc > secondThresholdArc) {
            secondColor = thresholdColor;
          }
          let dashValue = secondRadius * Math.PI * 2 * mainArc * arc;
          let dashBalance = secondRadius * Math.PI * 2 - dashValue;
          let dashArray = dashValue + ' ' + dashBalance;
          return (
            <circle
              id="fon"
              r={secondRadius}
              cx={width / 2}
              cy={heightUse}
              stroke={secondColor}
              stroke-width={mainWidth}
              stroke-dasharray={dashArray}
              fill="none"
            />
          );
        })}
        {radiiC.map(value => {
          if (value < options.thirdMin) {
            value = options.thirdMin;
          } else if (value > options.thirdMax) {
            value = options.thirdMax;
          }
          thirdValue = Math.round(value);
          let arc = (thirdValue - options.thirdMin) / (options.thirdMax - options.thirdMin);
          if (arc > thirdThresholdArc) {
            thirdColor = thresholdColor;
          }
          let dashValue = thirdRadius * Math.PI * 2 * mainArc * arc;
          let dashBalance = thirdRadius * Math.PI * 2 - dashValue;
          let dashArray = dashValue + ' ' + dashBalance;
          return (
            <circle
              id="fon"
              r={thirdRadius}
              cx={width / 2}
              cy={heightUse}
              stroke={thirdColor}
              stroke-width={mainWidth}
              stroke-dasharray={dashArray}
              fill="none"
            />
          );
        })}
      </g>
      <g>
        <text
          x={width / 2 - fontSizeValue}
          y={outRadius - fontSizeValue * 0.5}
          text-anchor="middle"
          font-size={fontSizeValue}
          fill={firstColor}
        >
          {firstValue}
        </text>
        <text
          x={width / 2 - fontSizeValue}
          y={outRadius - fontSizeValue * 0.5 + mainWidth}
          text-anchor="middle"
          font-size={fontSizeBaseName}
          fill={firstColor}
        >
          {firstBaseName}
        </text>
        <text
          x={width / 2 + fontSizeValue}
          y={outRadius - fontSizeValue * 0.5}
          text-anchor="middle"
          font-size={fontSizeValue}
          fill={secondColor}
        >
          {secondValue}
        </text>
        <text
          x={width / 2 + fontSizeValue}
          y={outRadius - fontSizeValue * 0.5 + mainWidth}
          text-anchor="middle"
          font-size={fontSizeBaseName}
          fill={secondColor}
        >
          {secondBaseName}
        </text>
        <text
          x={width / 2}
          y={outRadius + fontSizeValue * 0.75}
          text-anchor="middle"
          font-size={fontSizeValue}
          fill={thirdColor}
        >
          {thirdValue}
        </text>
        <text
          x={width / 2}
          y={outRadius + fontSizeValue * 0.75 + mainWidth}
          text-anchor="middle"
          font-size={fontSizeBaseName}
          fill={thirdColor}
        >
          {thirdBaseName}
        </text>
      </g>
    </svg>
  );
};
