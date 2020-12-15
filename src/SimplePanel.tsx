import React from "react";
import { PanelProps } from "@grafana/data";
import { SimpleOptions } from "types";

const colorGray = "#202226";
const colorGreen = "#73bf69";

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({
  options,
  data,
  width,
  height
}) => {
  let firstColor: string;
  let secondColor: string;
  let thirdColor: string;
  switch (options.firstColor) {
    case "red":
      firstColor = "#ed485b";
      break;
    case "green":
      firstColor = "#73bf69";
      break;
    case "blue":
      firstColor = "#5794f2";
      break;
    case "orange":
      firstColor = "#f3973e";
      break;
    case "purple":
      firstColor = "#b877d9";
      break;
    case "yellow":
      firstColor = "#fadf4b";
      break;
  }
  switch (options.secondColor) {
    case "red":
      secondColor = "#ed485b";
      break;
    case "green":
      secondColor = "#73bf69";
      break;
    case "blue":
      secondColor = "#5794f2";
      break;
    case "orange":
      secondColor = "#f3973e";
      break;
    case "purple":
      secondColor = "#b877d9";
      break;
    case "yellow":
      secondColor = "#fadf4b";
      break;
  }
  switch (options.thirdColor) {
    case "red":
      thirdColor = "#ed485b";
      break;
    case "green":
      thirdColor = "#73bf69";
      break;
    case "blue":
      thirdColor = "#5794f2";
      break;
    case "orange":
      thirdColor = "#f3973e";
      break;
    case "purple":
      thirdColor = "#b877d9";
      break;
    case "yellow":
      thirdColor = "#fadf4b";
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
  let firstBaseName: string | undefined = "null base";
  let secondBaseName: string | undefined = "null base";
  let thirdBaseName: string | undefined = "null base";
  const rotate = "rotate(-195 " + width / 2 + " " + heightUse + ")";
  const radii = data.series
    .filter(series => series.refId === "A")
    .map(series => {
      firstBaseName = series.name;
      return series;
    })
    .map(series => series.fields.find(field => field.type === "number"))
    .map(field => field?.values.get(field.values.length - 1));
  const radiiB = data.series
    .filter(series => series.refId === "B")
    .map(series => {
      secondBaseName = series.name;
      return series;
    })
    .map(series => series.fields.find(field => field.type === "number"))
    .map(field => field?.values.get(field.values.length - 1));
  const radiiC = data.series
    .filter(series => series.refId === "C")
    .map(series => {
      thirdBaseName = series.name;
      return series;
    })
    .map(series => series.fields.find(field => field.type === "number"))
    .map(field => field?.values.get(field.values.length - 1));
  return (
    <svg
      version="1.1"
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g transform={rotate}>
        <circle
          id="fon"
          r={outRadius}
          cx={width / 2}
          cy={heightUse}
          stroke={colorGreen}
          stroke-width={outWidth}
          stroke-dasharray={outRadius * Math.PI * 2 * mainArc}
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
          let arc =
            (firstValue - options.firstMin) /
            (options.firstMax - options.firstMin);
          let dashValue = firstRadius * Math.PI * 2 * mainArc * arc;
          let dashBalance = firstRadius * Math.PI * 2 - dashValue;
          let dashArray = dashValue + " " + dashBalance;
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
          let arc =
            (secondValue - options.secondMin) /
            (options.secondMax - options.secondMin);
          let dashValue = secondRadius * Math.PI * 2 * mainArc * arc;
          let dashBalance = secondRadius * Math.PI * 2 - dashValue;
          let dashArray = dashValue + " " + dashBalance;
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
          let arc =
            (thirdValue - options.thirdMin) /
            (options.thirdMax - options.thirdMin);
          let dashValue = thirdRadius * Math.PI * 2 * mainArc * arc;
          let dashBalance = thirdRadius * Math.PI * 2 - dashValue;
          let dashArray = dashValue + " " + dashBalance;
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
