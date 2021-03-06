;(function(angular) {
    'use strict'
    angular.module('app').constant('r6s1', {
        mapId: 'r6s1',
        name: 'Brazil',
        width: 754,
        height: 755,
        regions: [
            {
                id: "r6s1-1",
                name: "亚马孙平原",
                path: "polygon(17.11% 17.62%,1.06% 20.79%,0.27% 25.17%,3.85% 43.18%,11.27% 39.74%,17.24% 45.43%,22.15% 48.48%,33.29% 43.44%,43.10% 39.07%,52.39% 35.89%,60.61% 34.57%,69.10% 35.10%,72.28% 29.14%,70.56% 25.83%,56.23% 22.12%,35.15% 22.25%)",
                children: [
                    {
                        id: "r6s1-7",
                        name: "亚马孙河",
                        path: "polygon(34.88% 18.81%,15.65% 20.79%,5.97% 25.17%,6.63% 30.73%,11.67% 34.17%,32.63% 36.82%,46.29% 33.91%,58.75% 31.39%,59.81% 21.19%,39.66% 18.41%)"
                    }
                ]
            },
            {
                id: "r6s1-2",
                name: "巴西高原",
                path: "polygon(74.54% 39.07%,53.98% 35.50%,42.71% 41.06%,30.24% 44.50%,30.11% 51.26%,36.87% 59.74%,45.23% 60.13%,44.83% 70.07%,42.18% 72.05%,47.88% 76.56%,59.15% 76.56%,72.15% 74.97%,77.19% 71.39%,81.70% 54.44%,90.85% 46.09%,86.34% 38.41%)"
            },
            {
                id: "r6s1-3",
                name: "巴西利亚",
                path: "polygon(64.85% 55.23%,57.96% 60.79%,65.12% 65.17%,70.42% 61.46%)"
            },
            {
                id: "r6s1-4",
                name: "里约热内卢",
                path: "polygon(69.63% 71.92%,66.18% 76.82%,70.56% 81.72%,74.27% 76.82%)"
            },
            {
                id: "r6s1-5",
                name: "圣保罗",
                path: "polygon(63.26% 72.58%,59.81% 77.88%,64.32% 81.59%,67.64% 76.69%)"
            },
            {
                id: "r6s1-6",
                name: "伊泰普水电站",
                path: "polygon(46.42% 73.77%,41.25% 78.41%,47.35% 82.91%,54.38% 76.95%)"
            },
            {
                id: "r6s1-8",
                name: "太平洋",
                path: "polygon(0.13% 55.76%,0.13% 99.34%,9.55% 99.47%,11.01% 89.93%,13.13% 74.17%,12.07% 63.58%)"
            },
            {
                id: "r6s1-9",
                name: "大西洋",
                path: "polygon(99.20% 0.26%,34.88% 0.26%,43.90% 7.81%,54.64% 10.60%,60.08% 19.60%,57.16% 23.18%,65.38% 24.50%,74.01% 29.67%,84.48% 31.66%,91.51% 36.56%,92.84% 43.31%,83.69% 55.76%,74.27% 77.48%,59.15% 82.25%,48.14% 99.34%,99.73% 99.47%,99.60% 1.32%)"
            },
        ],
        labels: [
            {
                "id": "r6s1-1",
                "name": "亚马孙平原",
                textAnchor: 'middle',
                letterSpacing: '2em',
                fontSize: '18px',
                fontWeight: 'bold',
                "optimal": [
                    "24%",
                    "35%"
                ]
            },
            {
                "id": "r6s1-2",
                "name": "巴西高原",
                textAnchor: 'middle',
                fontSize: '18px',
                fontWeight: 'bold',
                "optimal": [
                    "62.83%",
                    "55.39%"
                ]
            },
            {
                "id": "r6s1-3",
                "name": "巴西利亚",
                "optimal": [
                    "66.5%",
                    "62%"
                ]
            },
            {
                "id": "r6s1-4",
                "name": "里约热内卢",
                "optimal": [
                    "71%",
                    "76.82%"
                ]
            },
            {
                "id": "r6s1-5",
                "name": "圣保罗",
                textAnchor: 'middle',
                "optimal": [
                    "62.2%",
                    "76%"
                ]
            },
            {
                "id": "r6s1-6",
                "name": "伊泰普水电站",
                "optimal": [
                    "48%",
                    "78.08%"
                ]
            },
            {
                "id": "r6s1-7",
                "name": "亚马孙河",
                fill: '#006994',
                textAnchor: 'middle',
                letterSpacing: '1.5em',
                "optimal": [
                    "33.59%",
                    "27.62%"
                ]
            },
            {
                "id": "r6s1-8",
                "name": "太平洋",
                writingMode: 'tb',
                fill: '#006994',
                fontSize: '24px',
                letterSpacing: '36px',
                "optimal": [
                    "5%",
                    "70%"
                ]
            },
            {
                "id": "r6s1-9",
                "name": "大西洋",
                writingMode: 'tb',
                fill: '#006994',
                fontSize: '24px',
                letterSpacing: '4px',
                "optimal": [
                    "84.02%",
                    "14%"
                ]
            }
        ]
    })
})(angular)