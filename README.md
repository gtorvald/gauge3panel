# Gauge панель для Grafana

Gauge датчик для Grafana, визуализирующий данные с трех источников одновременно.

## Установка панели локально 
1. Перейдите в директорию, указанную в вашей конфигурации Grafana в разделе \[paths] : plugins.
2. Склонируйте репозиторий в эту директорию.
```BASH
git clone https://github.com/gtorvald/gauge3panel.git
```
3. Установите зависимости.
```BASH
yarn install
```
4. Запустите плагин.
```BASH
yarn build
```
