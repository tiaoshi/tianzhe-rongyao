(function (angular) {
    'use strict'
    angular.module('app').constant('r1s1', {
        name: 'South America',
        mapId: 'r1s1',
        regions: [
            {
                id: 'xxr1',
                name: '巴西高原',
                path: '60.90% 43.32%, 47.58% 36.35%, 54.33% 32.64%, 58.65% 32.49%, 62.80% 31.45%, 67.13% 30.56%, 68.34% 27.60%, 74.05% 29.53%, 75.43% 26.71%, 78.03% 25.67%, 82.18% 31.01%, 84.95% 27.00%, 89.27% 27.60%, 91.18% 31.45%, 90.48% 37.39%, 87.37% 40.95%, 83.91% 49.55%, 80.10% 53.86%, 70.59% 56.23%, 70.07% 60.24%, 67.47% 63.06%, 62.80% 61.57%, 61.07% 60.09%, 60.55% 57.72%, 58.48% 55.79%, 60.73% 54.01%, 59.52% 48.96%, 62.11% 45.70%'
            },
            {
                id: 'xxr2',
                name: '太平洋',
                path: '1% 9%, 16% 10%, 24% 19%, 19% 24%, 20% 30%, 29% 40%, 37% 48%, 36% 61%, 34% 71%, 32% 84%, 33% 100%, 22% 100%, 22% 60%, 0% 60%'
            },
            {
                id: 'xxr4',
                name: '亚马孙平原',
                path: '26.82% 27.15%, 29.76% 25.67%, 31.31% 19.88%, 37.02% 20.18%, 42.04% 17.66%, 38.24% 15.88%, 38.06% 14.84%, 41.52% 12.46%, 36.33% 14.09%, 37.37% 10.53%, 40.48% 7.72%, 45.85% 8.31%, 51.21% 5.79%, 58.82% 11.42%, 64.88% 13.06%, 71.80% 19.88%, 80.62% 25.07%, 84.95% 26.26%, 83.22% 31.31%, 72.49% 29.23%, 59.00% 35.01%, 52.60% 32.49%, 47.92% 37.39%, 43.77% 36.80%, 41.35% 33.09%, 41.87% 30.42%, 39.10% 31.45%, 32.18% 29.67%, 28.89% 27.74%'
            },
            {
                id: 'xxr5',
                name: '圭亚那高原',
                path: '43.25% 13.35%, 44.64% 11.13%, 48.10% 10.39%, 52.25% 9.35%, 54.33% 10.83%, 55.54% 12.17%, 57.44% 14.09%, 57.27% 15.28%, 54.33% 17.66%, 50.52% 20.33%, 46.89% 20.33%, 46.02% 18.69%'
            },
            {
                id: 'xxr6',
                name: '加勒比海',
                path: '25.95% 0.15%, 47.92% 0.15%, 46.71% 4.45%, 37.89% 4.15%, 35.47% 4.60%, 30.45% 6.68%, 23.88% 4.45%, 23.70% 0%'
            },
            {
                id: 'xxr7',
                name: '火地岛',
                path: '39.27% 92.43%, 40.14% 91.99%, 41.70% 92.14%, 42.04% 92.88%, 42.91% 93.62%, 44.29% 94.51%, 45.85% 94.51%, 46.02% 93.32%, 46.71% 92.88%, 47.23% 92.88%, 49.48% 92.88%, 49.83% 92.88%, 50.87% 92.88%, 51.21% 92.73%, 53.46% 92.88%, 54.50% 92.73%, 55.19% 92.73%, 56.06% 93.03%, 56.06% 94.81%, 55.36% 95.85%, 54.50% 95.40%, 46.02% 95.55%, 43.43% 95.40%, 40.31% 95.10%, 38.93% 93.92%'
            },
            {
                id: 'xxr8',
                name: '大西洋',
                path: '55.54% 0.00%, 99.65% 0.30%, 99.48% 99.70%, 76.64% 99.55%, 75.43% 94.66%, 71.63% 92.14%, 70.42% 90.06%, 65.74% 90.21%, 60.21% 89.47%, 59.17% 88.43%, 56.57% 86.94%, 54.50% 86.94%, 53.63% 83.53%, 55.36% 79.38%, 58.82% 76.26%, 63.84% 71.66%, 67.99% 68.84%, 72.84% 66.62%, 83.91% 57.27%, 91.70% 47.77%, 88.93% 43.62%, 93.25% 39.17%, 96.54% 34.12%, 95.85% 29.82%, 92.56% 28.19%, 85.29% 24.33%, 82.01% 23.74%, 80.10% 20.62%, 76.30% 18.69%, 76.47% 15.88%, 71.97% 15.28%, 67.99% 10.68%, 64.19% 9.20%, 62.63% 10.09%, 57.96% 7.72%'
            },
            {
                id: 'xxr9',
                name: '拉普拉塔平原',
                path: '45.33% 80.56%, 43.94% 74.18%, 46.37% 74.63%, 47.58% 72.70%, 45.33% 70.18%, 48.44% 63.80%, 47.40% 60.24%, 57.27% 46.59%, 56.92% 42.43%, 61.07% 43.32%, 61.94% 46.44%, 60.38% 50.15%, 59.34% 53.12%, 60.21% 56.82%, 64.01% 58.61%, 60.21% 61.13%, 63.15% 62.02%, 65.40% 61.42%, 66.96% 63.50%, 60.73% 69.29%, 55.88% 73.44%, 50.00% 75.07%, 49.31% 76.71%, 47.23% 79.38%'
            },
            {
                id: 'xxr10',
                name: '亚马孙河',
                path: '33.74% 25.96%, 34.26% 24.78%, 36.33% 24.48%, 38.58% 25.22%, 40.83% 25.07%, 43.94% 23.74%, 43.94% 21.22%, 47.23% 20.92%, 48.10% 23.29%, 50.35% 24.04%, 50.35% 22.40%, 53.46% 22.40%, 54.84% 24.33%, 56.57% 24.18%, 56.06% 21.96%, 56.75% 21.66%, 59.00% 21.81%, 60.21% 23.59%, 62.46% 23.15%, 61.59% 20.62%, 65.05% 20.18%, 66.61% 22.85%, 67.30% 24.04%, 65.22% 24.48%, 64.19% 24.63%, 62.46% 24.18%, 61.07% 24.78%, 59.69% 24.78%, 58.48% 25.52%, 58.13% 25.82%, 56.40% 25.52%, 53.81% 26.41%, 52.60% 26.56%, 51.21% 26.41%, 49.65% 26.41%, 47.75% 25.82%, 46.19% 24.63%, 44.12% 24.78%, 43.25% 25.67%, 41.87% 25.96%, 41.52% 26.56%, 39.45% 27.00%, 38.58% 26.11%, 37.37% 26.26%, 36.33% 25.82%, 35.29% 26.71%, 34.60% 27.00%'
            },
            {
                id: 'xxr11',
                name: '潘帕斯草原',
                path: '48.96% 67.51%, 51.56% 67.80%, 54.33% 68.25%, 55.54% 68.25%, 57.09% 68.40%, 57.61% 68.84%, 57.27% 70.18%, 56.57% 70.62%, 57.27% 71.51%, 55.19% 73.89%, 50.52% 74.48%, 49.83% 74.18%, 48.62% 71.66%, 49.13% 70.92%, 49.48% 69.73%, 49.13% 69.44%, 48.79% 68.69%, 48.96% 68.10%'
            },
            {
                id: 'xxr12',
                name: '巴拉那河',
                path: '60.11% 40.36%, 60.55% 41.69%, 61.25% 43.03%, 60.03% 44.96%, 58.82% 45.25%, 58.48% 46.14%, 58.82% 47.03%, 57.61% 48.37%, 57.61% 49.85%, 57.44% 51.19%, 57.79% 52.23%, 58.13% 52.97%, 58.13% 54.01%, 57.79% 54.75%, 57.27% 55.64%, 56.57% 56.97%, 55.54% 58.16%, 55.19% 59.79%, 54.33% 60.98%, 54.15% 61.87%, 53.81% 62.76%, 52.6% 64.09%, 52.6% 65.73%, 53.63% 66.47%, 55.19% 67.21%, 54.5% 67.88%, 57.23% 65.88%, 57.92% 65.43%, 57.4% 63.2%, 55.33% 62.91%, 56.36% 61.68%, 57.75% 61.13%, 58.13% 60.83%, 58.82% 59.79%, 59.18% 58.75%, 59.17% 59.25%, 60.03% 58.9%, 60.73% 58.61%, 60.9% 58.46%, 61.59% 59.64%, 62.11% 59.94%, 63.8% 60.09%, 63.67% 59.94%, 64.36% 59.64%, 64.53% 58.61%, 65.01% 57.27%, 64.15% 56.68%, 63.46% 56.38%, 63.63% 55.04%, 64.32% 54.15%, 65.19% 52.97%, 66.22% 52.52%, 66.74% 51.78%, 66.09% 51.78%, 66.26% 52.82%, 67.65% 53.12%, 68.86% 53.41%, 69.72% 52.67%, 70.24% 51.34%, 70.2% 50.45%, 68.99% 49.85%, 69.34% 49.26%, 69.86% 48.66%, 70.38% 48.22%, 71.24% 47.77%, 71.28% 47.77%, 71.8% 47.63%, 73.18% 47.48%, 74.05% 47.33%, 74.57% 47.63%, 74.57% 48.52%, 75.26% 48.66%, 75.95% 48.66%, 76.12% 47.92%, 75.95% 47.33%, 75.61% 46.74%, 75.09% 45.99%, 74.22% 45.55%, 73.36% 45.85%, 71.97% 46.14%, 70.24% 46.14%, 68.51% 46.29%, 67.3% 46.88%, 66.61% 47.77%, 65.4% 49.11%, 64.01% 51.34%, 62.11% 53.26%, 61.42% 54.45%, 60.73% 56.23%, 59.86% 56.68%, 58.3% 57.12%, 59% 55.64%, 60.21% 54.75%, 60.38% 53.56%, 59.34% 53.12%, 59% 52.37%, 59% 50.45%, 59.17% 49.26%, 59.86% 48.81%, 60.55% 50%, 60.73% 48.96%, 61.59% 47.77%, 62.28% 46.88%, 61.59% 45.4%, 61.25% 44.66%, 61.76% 43.92%, 62.11% 43.18%, 61.59% 41.84%, 62.11% 41.39%, 62.46% 41.1%'
            },
            {
                id: 'xxr13',
                name: '麦哲伦海峡',
                path: '35.29% 92.43%, 36.16% 94.51%, 42.04% 92.88%, 46.37% 93.03%, 51.21% 93.03%, 58.48% 92.88%, 57.96% 89.76%, 48.62% 89.76%, 42.39% 89.76%, 41.70% 89.91%'
            },
            {
                id: 'xxr14',
                name: '奥里诺科平原',
                path: '35.81% 13.80%, 38.24% 13.65%, 41.87% 12.46%, 43.43% 12.46%, 43.94% 11.57%, 45.16% 10.39%, 48.44% 10.24%, 50.00% 9.64%, 52.25% 9.20%, 54.50% 8.90%, 54.33% 8.01%, 53.98% 7.27%, 53.98% 6.08%, 53.29% 5.64%, 49.65% 5.34%, 47.75% 5.64%, 45.85% 5.93%, 44.46% 6.23%, 43.08% 6.97%, 41.52% 7.42%, 40.48% 8.01%, 38.41% 9.20%, 36.51% 10.53%, 35.81% 10.98%, 35.47% 11.28%, 34.95% 12.17%, 35.29% 12.91%'
            },
            {
                id: 'xxr15',
                name: '巴塔哥尼亚高原',
                path: '44.46% 73.44%, 44.6% 76.96%, 44.6% 77%, 44.77% 77.74%, 44.91% 78.78%, 44.91% 79.97%, 45.21% 81.56%, 42.87% 83.38%, 43.7% 85.65%, 42.83% 87.69%, 40.48% 90.06%, 40.66% 91.54%, 40.31% 91.69%, 39.27% 91.99%, 38.06% 91.99%, 37.54% 91.54%, 37.2% 89.47%, 37.2% 87.09%, 37.72% 83.98%, 37.89% 80.71%, 38.75% 79.08%, 39.45% 78.64%, 39.62% 78.04%, 39.62% 76.56%, 40.48% 74.78%, 41.18% 73.59%, 41.87% 73%, 42.91% 72.7%, 44.12% 73%'
            },
            {
                id: 'xxr16',
                name: '安第斯山脉',
                path: '31.31% 8.91%, 34.66% 5.06%, 35.66% 12.06%, 34.8% 18.4%, 32.72% 20.03%, 30.85% 21.66%, 30.03% 24.63%, 29.93% 25.22%, 30.28% 27.6%, 30.89% 28.34%, 31.76% 30.71%, 31.18% 30.27%, 32.7% 30.56%, 33.04% 33.23%, 31.31% 33.98%, 31.49% 34.42%, 35.12% 34.27%, 37.37% 35.01%, 37.2% 37.09%, 37.72% 38.58%, 39.45% 38.87%, 41% 39.61%, 41.87% 40.36%, 42.21% 41.99%, 44.46% 43.32%, 47.06% 43.62%, 50.31% 44.66%, 50.65% 47.03%, 50.31% 47.92%, 50.1% 48.52%, 49.75% 50.15%, 49.75% 52.82%, 48.37% 54.75%, 47.19% 56.53%, 46.12% 59.64%, 45.08% 61.87%, 44.7% 63.2%, 44.25% 63.95%, 44.43% 65.13%, 44.08% 67.36%, 44.08% 69.88%, 43.08% 72.11%, 39.62% 73.44%, 37.72% 70.33%, 39.79% 69.58%, 39.97% 68.4%, 39.79% 66.77%, 39.1% 65.88%, 38.58% 65.13%, 39.1% 59.35%, 39.79% 54.45%, 40.14% 48.37%, 35.64% 43.18%, 30.62% 39.32%, 34.26% 37.54%, 34.08% 35.76%, 34.6% 35.61%, 34.6% 35.16%, 33.39% 34.72%, 31.31% 34.87%, 29.07% 37.09%, 22.49% 27.45%, 26.82% 25.96%, 27.16% 25.07%, 26.99% 23.44%, 25.61% 22.4%, 24.22% 22.26%, 25.26% 19.58%, 25.95% 17.66%, 27.16% 17.06%, 28.55% 15.28%'
            },
            {
                id: 'xxr17',
                name: '科迪勒拉山系',
                path: '14.71% 6.38%, 15.74% 6.08%, 16.44% 5.49%, 15.05% 4.01%, 17.47% 1.19%, 19.90% 2.52%, 20.76% 4.15%, 19.03% 5.93%, 17.47% 6.68%, 19.72% 8.16%, 21.28% 8.90%, 29.07% 9.35%, 30.80% 9.79%, 31.49% 12.61%, 31.14% 16.32%, 29.41% 17.36%, 27.16% 17.06%, 25.95% 17.80%, 25.78% 18.99%, 26.12% 20.03%, 27.34% 21.36%, 27.68% 22.55%, 27.34% 24.33%, 27.16% 24.93%, 26.82% 25.67%, 26.64% 25.96%, 25.61% 26.85%, 27.16% 28.19%, 28.89% 30.12%, 28.72% 31.90%, 29.24% 33.38%, 30.28% 34.12%, 33.39% 34.57%, 34.60% 34.87%, 34.60% 35.61%, 34.08% 35.76%, 34.26% 37.39%, 34.43% 37.83%, 35.99% 37.54%, 37.89% 39.02%, 38.06% 39.61%, 37.72% 41.99%, 38.58% 42.43%, 42.04% 41.10%, 44.81% 42.43%, 47.23% 43.62%, 49.13% 44.66%, 49.13% 47.03%, 48.62% 47.48%, 47.06% 49.11%, 43.43% 48.81%, 42.04% 49.41%, 41.87% 50.89%, 41.87% 51.78%, 42.91% 52.23%, 44.81% 51.93%, 45.16% 49.70%, 47.75% 50.74%, 46.02% 57.27%, 41.00% 57.42%, 40.66% 58.31%, 40.83% 59.79%, 41.52% 60.68%, 42.21% 62.46%, 41.70% 63.50%, 40.14% 64.09%, 39.62% 64.39%, 39.79% 64.99%, 39.97% 65.58%, 39.62% 66.02%, 39.79% 66.62%, 40.31% 67.66%, 40.66% 69.14%, 39.97% 70.18%, 38.75% 71.07%, 38.58% 72.11%, 38.75% 73.15%, 37.37% 73.44%, 35.81% 70.18%, 35.81% 67.06%, 37.02% 64.84%, 37.72% 63.50%, 37.72% 62.46%, 37.89% 59.50%, 37.20% 44.07%, 32.70% 42.28%, 29.58% 38.43%, 26.64% 34.42%, 23.53% 28.19%, 22.15% 24.48%, 24.22% 19.14%, 26.12% 16.91%, 27.51% 14.09%, 27.16% 12.31%, 25.95% 10.09%, 24.22% 8.90%, 22.84% 9.64%, 20.42% 9.94%, 17.30% 9.20%'
            },
            {
                id: 'xxr3',
                name: '阿空加瓜山',
                path: '25.78% 59.83%, 25.43% 64.8%, 29.28% 66.39%, 31.62% 67.17%, 35.99% 67.17%, 37.54% 66.02%, 39.97% 65.73%, 39.79% 63.2%, 37.89% 61.72%, 37.54% 61.13%'
            }
        ]
    })
})(angular)
