import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addNumberInput({
      path: 'firstMin',
      name: 'Min for first database',
      defaultValue: 0,
    })
    .addRadio({
      path: 'typeFirstMax',
      name: 'Type of max value for first database',
      defaultValue: 'users',
      settings: {
        options: [
          {
            value: 'users',
            label: "User's value",
          },
          {
            value: 'max',
            label: 'Max',
          },
          {
            value: 'maxRound',
            label: 'Rounding max',
          },
          {
            value: 'otherBaseValue',
            label: 'value of other database',
          },
        ],
      },
    })
    .addNumberInput({
      path: 'firstMax',
      name: 'Max for first database',
      defaultValue: 100,
      showIf: config => config.typeFirstMax === 'users',
    })
    .addRadio({
      path: 'typeFirstMaxDataBase',
      name: 'Choose database',
      defaultValue: 'A',
      settings: {
        options: [
          {
            value: 'A',
            label: 'A',
          },
          {
            value: 'B',
            label: 'B',
          },
          {
            value: 'C',
            label: 'C',
          },
        ],
      },
      showIf: config => config.typeFirstMax === 'otherBaseValue',
    })
    .addRadio({
      path: 'firstColor',
      name: 'Color of first database',
      defaultValue: '#73bf69',
      settings: {
        options: [
          {
            value: '#ed485b',
            label: 'Red',
          },
          {
            value: '#73bf69',
            label: 'Green',
          },
          {
            value: '#5794f2',
            label: 'Blue',
          },
          {
            value: '#fadf4b',
            label: 'Yellow',
          },
          {
            value: '#f3973e',
            label: 'Orange',
          },
          {
            value: '#b877d9',
            label: 'Purple',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'useFirstThreshold',
      name: 'Thresholds mode for first database',
      defaultValue: false,
    })
    .addRadio({
      path: 'typeFirstThreshold',
      name: 'Percentage means thresholds relative to min & max',
      defaultValue: 'absolute',
      settings: {
        options: [
          {
            value: 'absolute',
            label: 'Absolute',
          },
          {
            value: 'percentage',
            label: 'Percentage',
          },
        ],
      },
      showIf: config => config.useFirstThreshold,
    })
    .addNumberInput({
      path: 'firstThresholdValue',
      name: 'Threshold of first database',
      defaultValue: 80,
      showIf: config => config.useFirstThreshold,
    })
    .addRadio({
      path: 'firstThresholdColor',
      name: 'Color of threshold of first database',
      defaultValue: '#ed485b',
      settings: {
        options: [
          {
            value: '#ed485b',
            label: 'Red',
          },
          {
            value: '#73bf69',
            label: 'Green',
          },
          {
            value: '#5794f2',
            label: 'Blue',
          },
          {
            value: '#fadf4b',
            label: 'Yellow',
          },
          {
            value: '#f3973e',
            label: 'Orange',
          },
          {
            value: '#b877d9',
            label: 'Purple',
          },
        ],
      },
      showIf: config => config.useFirstThreshold,
    })
    .addNumberInput({
      path: 'secondMin',
      name: 'Min for second database',
      defaultValue: 0,
    })
    .addRadio({
      path: 'typeSecondMax',
      name: 'Type of max value for second database',
      defaultValue: 'users',
      settings: {
        options: [
          {
            value: 'users',
            label: "User's value",
          },
          {
            value: 'max',
            label: 'Max',
          },
          {
            value: 'maxRound',
            label: 'Rounding max',
          },
          {
            value: 'otherBaseValue',
            label: 'value of other database',
          },
        ],
      },
    })
    .addNumberInput({
      path: 'secondMax',
      name: 'Max for second database',
      defaultValue: 100,
      showIf: config => config.typeSecondMax === 'users',
    })
    .addRadio({
      path: 'typeSecondMaxDataBase',
      name: 'Choose database',
      defaultValue: 'A',
      settings: {
        options: [
          {
            value: 'A',
            label: 'A',
          },
          {
            value: 'B',
            label: 'B',
          },
          {
            value: 'C',
            label: 'C',
          },
        ],
      },
      showIf: config => config.typeSecondMax === 'otherBaseValue',
    })
    .addRadio({
      path: 'secondColor',
      name: 'Color of second database',
      defaultValue: '#73bf69',
      settings: {
        options: [
          {
            value: '#ed485b',
            label: 'Red',
          },
          {
            value: '#73bf69',
            label: 'Green',
          },
          {
            value: '#5794f2',
            label: 'Blue',
          },
          {
            value: '#fadf4b',
            label: 'Yellow',
          },
          {
            value: '#f3973e',
            label: 'Orange',
          },
          {
            value: '#b877d9',
            label: 'Purple',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'useSecondThreshold',
      name: 'Thresholds mode for second database',
      defaultValue: false,
    })
    .addRadio({
      path: 'typeSecondThreshold',
      name: 'Percentage means thresholds relative to min & max',
      defaultValue: 'absolute',
      settings: {
        options: [
          {
            value: 'absolute',
            label: 'Absolute',
          },
          {
            value: 'percentage',
            label: 'Percentage',
          },
        ],
      },
      showIf: config => config.useSecondThreshold,
    })
    .addNumberInput({
      path: 'secondThresholdValue',
      name: 'Threshold of second database',
      defaultValue: 80,
      showIf: config => config.useSecondThreshold,
    })
    .addRadio({
      path: 'secondThresholdColor',
      name: 'Color of threshold of second database',
      defaultValue: '#ed485b',
      settings: {
        options: [
          {
            value: '#ed485b',
            label: 'Red',
          },
          {
            value: '#73bf69',
            label: 'Green',
          },
          {
            value: '#5794f2',
            label: 'Blue',
          },
          {
            value: '#fadf4b',
            label: 'Yellow',
          },
          {
            value: '#f3973e',
            label: 'Orange',
          },
          {
            value: '#b877d9',
            label: 'Purple',
          },
        ],
      },
      showIf: config => config.useSecondThreshold,
    })
    .addNumberInput({
      path: 'thirdMin',
      name: 'Min for third database',
      defaultValue: 0,
    })
    .addRadio({
      path: 'typeThirdMax',
      name: 'Type of max value for third database',
      defaultValue: 'users',
      settings: {
        options: [
          {
            value: 'users',
            label: "User's value",
          },
          {
            value: 'max',
            label: 'Max',
          },
          {
            value: 'maxRound',
            label: 'Rounding max',
          },
          {
            value: 'otherBaseValue',
            label: 'value of other database',
          },
        ],
      },
    })
    .addNumberInput({
      path: 'thirdMax',
      name: 'Max for third database',
      defaultValue: 100,
      showIf: config => config.typeThirdMax === 'users',
    })
    .addRadio({
      path: 'typeThirdMaxDataBase',
      name: 'Choose database',
      defaultValue: 'A',
      settings: {
        options: [
          {
            value: 'A',
            label: 'A',
          },
          {
            value: 'B',
            label: 'B',
          },
          {
            value: 'C',
            label: 'C',
          },
        ],
      },
      showIf: config => config.typeThirdMax === 'otherBaseValue',
    })
    .addRadio({
      path: 'thirdColor',
      name: 'Color of third database',
      defaultValue: '#73bf69',
      settings: {
        options: [
          {
            value: '#ed485b',
            label: 'Red',
          },
          {
            value: '#73bf69',
            label: 'Green',
          },
          {
            value: '#5794f2',
            label: 'Blue',
          },
          {
            value: '#fadf4b',
            label: 'Yellow',
          },
          {
            value: '#f3973e',
            label: 'Orange',
          },
          {
            value: '#b877d9',
            label: 'Purple',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'useThirdThreshold',
      name: 'Thresholds mode for third database',
      defaultValue: false,
    })
    .addRadio({
      path: 'typeThirdThreshold',
      name: 'Percentage means thresholds relative to min & max',
      defaultValue: 'absolute',
      settings: {
        options: [
          {
            value: 'absolute',
            label: 'Absolute',
          },
          {
            value: 'percentage',
            label: 'Percentage',
          },
        ],
      },
      showIf: config => config.useSecondThreshold,
    })
    .addNumberInput({
      path: 'thirdThresholdValue',
      name: 'Threshold of third database',
      defaultValue: 80,
      showIf: config => config.useThirdThreshold,
    })
    .addRadio({
      path: 'thirdThresholdColor',
      name: 'Color of threshold of third database',
      defaultValue: '#ed485b',
      settings: {
        options: [
          {
            value: '#ed485b',
            label: 'Red',
          },
          {
            value: '#73bf69',
            label: 'Green',
          },
          {
            value: '#5794f2',
            label: 'Blue',
          },
          {
            value: '#fadf4b',
            label: 'Yellow',
          },
          {
            value: '#f3973e',
            label: 'Orange',
          },
          {
            value: '#b877d9',
            label: 'Purple',
          },
        ],
      },
      showIf: config => config.useThirdThreshold,
    });
});
