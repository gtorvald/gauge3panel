import { PanelPlugin } from "@grafana/data";
import { SimpleOptions } from "./types";
import { SimplePanel } from "./SimplePanel";

export const plugin = new PanelPlugin<SimpleOptions>(
  SimplePanel
).setPanelOptions(builder => {
  return (
    builder
      .addNumberInput({
        path: "firstMin",
        name: "Min for first database",
        defaultValue: 0
      })
      .addNumberInput({
        path: "firstMax",
        name: "Max fo first database",
        defaultValue: 100
      })
      .addNumberInput({
        path: "secondMin",
        name: "Min fo second database",
        defaultValue: 0
      })
      .addNumberInput({
        path: "secondMax",
        name: "Max fo second database",
        defaultValue: 100
      })
      .addNumberInput({
        path: "thirdMin",
        name: "Min fo third database",
        defaultValue: 0
      })
      .addNumberInput({
        path: "thirdMax",
        name: "Max fo third database",
        defaultValue: 100
      })
      // .addTextInput({
      //   path: 'text',
      //   name: 'Simple text option',
      //   description: 'Description of panel option',
      //   defaultValue: 'Default value of text input option',
      // })
      // .addBooleanSwitch({
      //   path: 'showSeriesCount',
      //   name: 'Show series counter',
      //   defaultValue: false,
      // })
      // .addRadio({
      //   path: 'seriesCountSize',
      //   defaultValue: 'sm',
      //   name: 'Series counter size',
      //   settings: {
      //     options: [
      //       {
      //         value: 'sm',
      //         label: 'Small',
      //       },
      //       {
      //         value: 'md',
      //         label: 'Medium',
      //       },
      //       {
      //         value: 'lg',
      //         label: 'Large',
      //       },
      //     ],
      //   },
      //   showIf: config => config.showSeriesCount,
      // })
      .addRadio({
        path: "firstColor",
        name: "Color of first database",
        defaultValue: "yellow",
        settings: {
          options: [
            {
              value: "red",
              label: "Red"
            },
            {
              value: "green",
              label: "Green"
            },
            {
              value: "blue",
              label: "Blue"
            },
            {
              value: "yellow",
              label: "Yellow"
            },
            {
              value: "orange",
              label: "Orange"
            },
            {
              value: "purple",
              label: "Purple"
            }
          ]
        }
      })
      .addRadio({
        path: "secondColor",
        name: "Color of second database",
        defaultValue: "blue",
        settings: {
          options: [
            {
              value: "red",
              label: "Red"
            },
            {
              value: "green",
              label: "Green"
            },
            {
              value: "blue",
              label: "Blue"
            },
            {
              value: "yellow",
              label: "Yellow"
            },
            {
              value: "orange",
              label: "Orange"
            },
            {
              value: "purple",
              label: "Purple"
            }
          ]
        }
      })
      .addRadio({
        path: "thirdColor",
        name: "Color of third database",
        defaultValue: "red",
        settings: {
          options: [
            {
              value: "red",
              label: "Red"
            },
            {
              value: "green",
              label: "Green"
            },
            {
              value: "blue",
              label: "Blue"
            },
            {
              value: "yellow",
              label: "Yellow"
            },
            {
              value: "orange",
              label: "Orange"
            },
            {
              value: "purple",
              label: "Purple"
            }
          ]
        }
      })
  );
});
