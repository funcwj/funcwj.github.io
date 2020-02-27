var footprint = echarts.init(document.getElementById('my-footprint'));

var city = [
    { name: '合肥', time: ['Born ~ 2013.08', 20] },
    { name: '苏州', time: ['2015.08/2016.05/2018.04', 10] },
    { name: '北京', time: ['2019.04 ~ 2019.10', 15] },
    { name: '无锡', time: ['2016.05', 10] },
    { name: '上海', time: ['2015.05/2019.12', 10] },
    { name: '南京', time: ['2018.05', 10] },
    { name: '杭州', time: ['2017.12 ~ 2018.08', 15] },
    { name: '深圳', time: ['2016.07/2018.09 ~ 2019.04', 15] },
    { name: '西安', time: ['2013.09 ~ 2020.04', 20] },
    { name: '西宁', time: ['2014.08/2017.08', 10] },
    { name: '兰州', time: ['2014.08', 10] },
    { name: '张掖', time: ['2014.08', 10] },
    { name: '延安', time: ['2014.05', 10] },
    { name: '成都', time: ['2020.01', 10] },
    { name: '重庆', time: ['2014.10', 10] },
    { name: '长沙', time: ['2017.04', 10] },
    { name: '武汉', time: ['2015.02/2016.05', 10] },
    { name: '香港', time: ['2019.12', 10] },
    { name: '郑州', time: ['2017.04', 10] },
    { name: '开封', time: ['2017.04', 10] },
    { name: '宝鸡', time: ['2019.12', 10] },
    { name: '天水', time: ['2014.08', 10] },
    { name: '舟山', time: ['2018.06', 10] },
];
var city_coordinate = {
    '苏州': [120.61, 31.30],
    '北京': [116.41, 39.90],
    '无锡': [120.30, 32.5],
    '合肥': [117.27, 31.86],
    '南京': [118.78, 32.04],
    '上海': [121.48, 31.22],
    '杭州': [120.19, 30.26],
    '深圳': [114.07, 22.62],
    '西安': [108.95, 34.27],
    '西宁': [101.74, 36.56],
    '兰州': [103.73, 36.03],
    '张掖': [100.45, 38.93],
    '延安': [109.47, 36.6],
    '成都': [104.06, 30.67],
    '重庆': [106.54, 29.59],
    '长沙': [113, 28.21],
    '武汉': [114.31, 30.52],
    '香港': [113.60, 22.10],
    '郑州': [113.65, 34.76],
    '开封': [114.35, 34.79],
    '宝鸡': [107.15, 34.38],
    '天水': [105.72, 34.58],
    '舟山': [122.21, 29.99],
};

var convertData = function (data) {
    var converted = [];
    for (var i = 0; i < data.length; i++) {
        var ptr = city_coordinate[data[i].name];
        converted.push({
            name: data[i].name,
            value: ptr.concat(data[i].time)
        });
    }
    return converted;
};

option = {
    title: {
    },
    tooltip: {
        trigger: 'item',
        padding: 5,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (data) {
            return '<div style="font-size: 15px;">' + data.name + " (" + data.value[2] + ")</div>";
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#e6e6e6',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#cccccc'
            }
        }
    },
    series: [
        {
            name: '足迹',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(city),
            symbolSize: function (value) {
                return value[3] / 2;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#4d4d4d',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

footprint.setOption(option);