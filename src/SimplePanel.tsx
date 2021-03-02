import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';

const colorGray = '#202226';
const colorGreen = '#73bf69';
const colorRed = '#ed485b';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  let firstColor = String(options.firstColor);
  let secondColor = String(options.secondColor);
  let thirdColor = String(options.thirdColor);
  let thresholdColor = colorRed;
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
  let firstBaseName: string | undefined = 'null base';
  let secondBaseName: string | undefined = 'null base';
  let thirdBaseName: string | undefined = 'null base';
  const rotate = 'rotate(-195 ' + width / 2 + ' ' + heightUse + ')';
  // отрисовка дуг
  function renderCircle(radius: number, color: string, strokeWidth: number, dasharray: string) {
    return (
      <circle
        id="fon"
        r={radius}
        cx={width / 2}
        cy={heightUse}
        stroke={color}
        stroke-width={strokeWidth}
        stroke-dasharray={dasharray}
        fill="none"
      />
    );
  }
  // вывод значений на экран в виде дуги и текста
  function renderValues(
    value: number,
    min: number,
    max: number,
    thresholdArc: number,
    radius: number,
    color: string,
    valueAndTextX: number,
    valueY: number,
    textY: number,
    baseName: string
  ) {
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    value = Math.round(value);
    let arc = (value - min) / (max - min);
    if (arc > thresholdArc) {
      color = thresholdColor;
    }
    let dashValue = radius * Math.PI * 2 * mainArc * arc;
    let dashBalance = radius * Math.PI * 2 - dashValue;
    let dashArray = dashValue + ' ' + dashBalance;
    return (
      <g>
        <g transform={rotate}>
          <circle
            id="fon"
            r={radius}
            cx={width / 2}
            cy={heightUse}
            stroke={color}
            stroke-width={mainWidth}
            stroke-dasharray={dashArray}
            fill="none"
          />
        </g>
        <text x={valueAndTextX} y={valueY} text-anchor="middle" font-size={fontSizeValue} fill={color}>
          {value}
        </text>
        <text x={valueAndTextX} y={textY} text-anchor="middle" font-size={fontSizeBaseName} fill={color}>
          {baseName}
        </text>
      </g>
    );
  }
  // обработка пороговых значений
  function getThresholdArc(typeThreshold: string, thresholdValue: number, min: number, max: number) {
    if (typeThreshold === 'absolute') {
      if (thresholdValue < min) {
        thresholdValue = min;
      } else if (thresholdValue > max) {
        thresholdValue = max;
      }
      return (thresholdValue - min) / (max - min);
    } else {
      if (thresholdValue < 0) {
        thresholdValue = 0;
      } else if (thresholdValue > 100) {
        thresholdValue = 100;
      }
      return thresholdValue / 100;
    }
  }
  let dashArray = String(outRadius * Math.PI * 2 * mainArc);
  let firstThresholdArc = 1;
  let secondThresholdArc = 1;
  let thirdThresholdArc = 1;
  if (options.useFirstThreshold) {
    firstThresholdArc = getThresholdArc(
      options.typeFirstThreshold,
      options.firstThresholdValue,
      options.firstMin,
      options.firstMax
    );
  }
  if (options.useSecondThreshold) {
    secondThresholdArc = getThresholdArc(
      options.typeSecondThreshold,
      options.secondThresholdValue,
      options.secondMin,
      options.secondMax
    );
  }
  if (options.useThirdThreshold) {
    thirdThresholdArc = getThresholdArc(
      options.typeThirdThreshold,
      options.thirdThresholdValue,
      options.thirdMin,
      options.thirdMax
    );
  }
  let thresholdArc = Math.min(firstThresholdArc, secondThresholdArc, thirdThresholdArc);
  switch (thresholdArc) {
    case firstThresholdArc:
      thresholdColor = options.firstThresholdColor;
      break;
    case secondThresholdArc:
      thresholdColor = options.secondThresholdColor;
      break;
    case thirdThresholdArc:
      thresholdColor = options.thirdThresholdColor;
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
  // отрисовка
  return (
    <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <g transform={rotate}>
        {renderCircle(outRadius, thresholdColor, outWidth, String(outRadius * Math.PI * 2 * mainArc))}
        {renderCircle(outRadius, colorGreen, outWidth, dashArray)}
        {renderCircle(firstRadius, colorGray, mainWidth, String(firstRadius * Math.PI * 2 * mainArc))}
        {renderCircle(secondRadius, colorGray, mainWidth, String(secondRadius * Math.PI * 2 * mainArc))}
        {renderCircle(thirdRadius, colorGray, mainWidth, String(thirdRadius * Math.PI * 2 * mainArc))}
      </g>
      <g>
        {radii.map(value => {
          return renderValues(
            value,
            options.firstMin,
            options.firstMax,
            firstThresholdArc,
            firstRadius,
            firstColor,
            width / 2 - fontSizeValue,
            outRadius - fontSizeValue * 0.5,
            outRadius - fontSizeValue * 0.5 + mainWidth,
            String(firstBaseName)
          );
        })}
        {radiiB.map(value => {
          return renderValues(
            value,
            options.secondMin,
            options.secondMax,
            secondThresholdArc,
            secondRadius,
            secondColor,
            width / 2 + fontSizeValue,
            outRadius - fontSizeValue * 0.5,
            outRadius - fontSizeValue * 0.5 + mainWidth,
            String(secondBaseName)
          );
        })}
        {radiiC.map(value => {
          return renderValues(
            value,
            options.thirdMin,
            options.thirdMax,
            thirdThresholdArc,
            thirdRadius,
            thirdColor,
            width / 2,
            outRadius + fontSizeValue * 0.75,
            outRadius + fontSizeValue * 0.75 + mainWidth,
            String(thirdBaseName)
          );
        })}
      </g>
    </svg>
  );
};
