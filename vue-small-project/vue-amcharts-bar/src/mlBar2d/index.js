/* eslint-disable */
import AmCharts from "amcharts3";
import AmSerial from "amcharts3/amcharts/serial";
/* eslint-enable */

import mlBar2d from './src/mlBar2d';
mlBar2d.install = function (Vue) {
    Vue.component(mlBar2d.name, mlBar2d);
};

export default mlBar2d;
