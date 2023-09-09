import React from 'react';
import { DocSearch } from '@docsearch/react';

import { AppLink as Link } from '../AppLink';

function Search() {
  return (
    <DocSearch
      appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
      apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
      indexName="markdoc"
    />
  );
}

export function TopNav({ children }) {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  return (
    <div className="nav-bar">
      <nav>
        <div className="flex top-row">
          <Link href="/" className="flex">
          <svg width="112" height="37" viewBox="0 0 4000 2026" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_219_3)">
            <path d="M3826.84 0H173.16C77.5264 0 0 77.5265 0 173.16V1852.81C0 1948.45 77.5264 2025.97 173.16 2025.97H3826.84C3922.47 2025.97 4000 1948.45 4000 1852.81V173.16C4000 77.5265 3922.47 0 3826.84 0Z" fill="#374150"/>
            <path d="M491.359 1471.86L663.411 555.498H860.398L1032.45 1471.86H859.152L834.216 1289.84H689.593L664.658 1471.86H491.359ZM814.268 1147.71L775.619 860.953C773.126 845.991 770.632 831.03 768.139 816.069C766.476 801.108 764.398 786.147 761.905 771.186C759.411 786.147 756.918 801.108 754.424 816.069C752.762 831.03 750.684 845.991 748.191 860.953L709.541 1147.71H814.268ZM1300.5 1471.86V697.628H1128.45V555.498H1642.11V697.628H1470.06V1471.86H1300.5ZM1801.7 1471.86V555.498H1972.5V1329.73H2260.5V1471.86H1801.7ZM2632.03 1481.84C2607.93 1481.84 2584.24 1479.34 2560.97 1474.36C2537.7 1469.37 2515.67 1461.06 2494.89 1449.42C2474.94 1436.95 2457.07 1421.58 2441.28 1403.29C2426.32 1385 2413.85 1365.06 2403.88 1343.45C2394.74 1321 2388.5 1298.15 2385.18 1274.87C2381.85 1251.6 2380.19 1227.91 2380.19 1203.81V823.55C2380.19 799.446 2381.85 775.758 2385.18 752.485C2388.5 729.212 2394.74 706.771 2403.88 685.16C2413.85 662.719 2426.32 642.355 2441.28 624.069C2457.07 605.784 2474.94 590.823 2494.89 579.186C2515.67 566.719 2537.7 557.576 2560.97 551.758C2584.24 545.108 2607.93 541.784 2632.03 541.784C2656.14 541.784 2679.83 545.108 2703.1 551.758C2726.37 557.576 2747.98 566.719 2767.93 579.186C2788.71 590.823 2806.58 605.784 2821.54 624.069C2837.33 642.355 2849.8 662.719 2858.94 685.16C2868.92 706.771 2875.57 729.212 2878.89 752.485C2882.22 775.758 2883.88 799.446 2883.88 823.55V1203.81C2883.88 1227.91 2882.22 1251.6 2878.89 1274.87C2875.57 1298.15 2868.92 1321 2858.94 1343.45C2849.8 1365.06 2837.33 1385 2821.54 1403.29C2806.58 1421.58 2788.71 1436.95 2767.93 1449.42C2747.98 1461.06 2726.37 1469.37 2703.1 1474.36C2679.83 1479.34 2656.14 1481.84 2632.03 1481.84ZM2632.03 1339.71C2642.01 1339.71 2651.57 1337.63 2660.71 1333.47C2669.85 1329.32 2677.33 1323.5 2683.15 1316.02C2689.8 1308.54 2694.79 1300.23 2698.11 1291.08C2702.27 1281.94 2705.18 1272.38 2706.84 1262.41C2709.33 1252.43 2711 1242.87 2711.83 1233.73C2712.66 1223.76 2713.07 1213.78 2713.07 1203.81V823.55C2713.07 813.576 2712.66 803.602 2711.83 793.628C2711 783.654 2709.33 774.095 2706.84 764.952C2705.18 754.978 2702.27 745.42 2698.11 736.277C2694.79 727.134 2689.8 718.823 2683.15 711.342C2676.5 703.862 2668.61 698.043 2659.46 693.888C2650.32 689.732 2640.76 687.654 2630.79 687.654C2620.81 687.654 2611.26 690.147 2602.11 695.134C2593.8 699.29 2586.32 705.108 2579.67 712.589C2573.85 720.069 2568.87 728.381 2564.71 737.524C2561.39 746.667 2558.48 756.225 2555.98 766.199C2554.32 775.342 2553.07 784.901 2552.24 794.875C2551.41 804.017 2551 813.576 2551 823.55V1203.81C2551 1213.78 2551.41 1223.76 2552.24 1233.73C2553.07 1242.87 2554.32 1252.43 2555.98 1262.41C2558.48 1272.38 2561.39 1281.94 2564.71 1291.08C2568.87 1300.23 2573.85 1308.54 2579.67 1316.02C2586.32 1323.5 2594.22 1329.32 2603.36 1333.47C2612.5 1337.63 2622.06 1339.71 2632.03 1339.71ZM3252.92 1481.84C3231.31 1481.84 3209.28 1479.76 3186.84 1475.6C3165.23 1472.28 3144.45 1465.63 3124.5 1455.65C3104.55 1444.85 3086.68 1431.55 3070.89 1415.76C3055.1 1399.97 3041.8 1382.51 3031 1363.39C3021.02 1343.45 3013.54 1322.67 3008.55 1301.06C3003.57 1278.61 3001.07 1256.17 3001.07 1233.73H3171.88C3171.88 1246.2 3173.13 1258.67 3175.62 1271.13C3178.94 1283.6 3183.93 1295.24 3190.58 1306.04C3197.23 1316.85 3205.96 1325.16 3216.76 1330.98C3228.4 1336.8 3240.45 1339.71 3252.92 1339.71C3266.22 1339.71 3278.68 1336.38 3290.32 1329.73C3301.96 1323.08 3311.1 1314.36 3317.75 1303.55C3325.23 1291.91 3330.22 1279.45 3332.71 1266.15C3336.03 1252.85 3337.7 1239.97 3337.7 1227.5C3337.7 1208.38 3333.54 1190.1 3325.23 1172.64C3316.92 1154.36 3305.7 1138.98 3291.57 1126.51C3278.27 1114.04 3262.89 1103.65 3245.44 1095.34C3228.81 1086.2 3212.19 1077.06 3195.57 1067.91C3178.94 1057.94 3162.74 1047.55 3146.94 1036.74C3131.98 1025.94 3117.44 1014.3 3103.31 1001.84C3090.01 988.537 3077.54 974.407 3065.9 959.446C3054.27 944.485 3044.29 928.277 3035.98 910.823C3028.5 893.368 3022.68 875.498 3018.53 857.212C3015.2 838.095 3013.54 819.394 3013.54 801.108C3013.54 778.667 3015.62 756.641 3019.77 735.03C3024.76 713.42 3031.83 692.641 3040.97 672.693C3050.94 651.914 3063.41 633.212 3078.37 616.589C3093.33 599.966 3110.37 586.251 3129.49 575.446C3148.61 564.641 3168.97 557.16 3190.58 553.004C3213.02 548.017 3235.46 545.524 3257.9 545.524C3279.52 545.524 3301.13 547.602 3322.74 551.758C3344.35 555.914 3364.71 563.394 3383.83 574.199C3402.94 584.173 3419.98 597.472 3434.94 614.095C3449.9 629.888 3461.96 647.758 3471.1 667.706C3481.07 687.654 3488.14 708.433 3492.29 730.043C3497.28 750.823 3499.77 772.433 3499.77 794.875H3328.97C3328.97 782.407 3327.72 770.355 3325.23 758.719C3323.57 746.251 3319.83 735.03 3314.01 725.056C3309.02 714.251 3301.13 705.524 3290.32 698.875C3280.35 691.394 3269.54 687.654 3257.9 687.654C3245.44 687.654 3233.8 691.394 3223 698.875C3212.19 706.355 3203.88 715.914 3198.06 727.55C3193.07 738.355 3189.33 749.992 3186.84 762.459C3184.35 774.927 3183.1 787.394 3183.1 799.862C3183.1 818.979 3186.84 837.264 3194.32 854.719C3202.63 872.173 3213.85 887.55 3227.98 900.849C3242.11 913.316 3257.49 924.121 3274.11 933.264C3291.57 941.576 3308.19 950.303 3323.98 959.446C3340.61 968.589 3356.81 978.563 3372.61 989.368C3388.4 1000.17 3402.94 1012.23 3416.24 1025.52C3430.37 1037.99 3443.26 1052.12 3454.89 1067.91C3466.53 1082.87 3476.09 1099.08 3483.57 1116.54C3491.88 1133.16 3497.7 1151.03 3501.02 1170.15C3505.18 1188.43 3507.26 1207.13 3507.26 1226.25C3507.26 1248.69 3504.76 1271.13 3499.77 1293.58C3494.79 1316.02 3487.31 1337.21 3477.33 1357.16C3467.36 1377.11 3454.48 1395.39 3438.68 1412.02C3422.89 1428.64 3405.02 1442.36 3385.07 1453.16C3365.13 1463.97 3343.93 1471.45 3321.49 1475.6C3299.05 1479.76 3276.19 1481.84 3252.92 1481.84Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_219_3">
            <rect width="4000" height="2025.97" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <hc>Help Center</hc>
          </Link>
          <button
            className="hamburger"
            onClick={() => setShowMobileNav((o) => !o)}
          >
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="2" fill="var(--black)" />
              <rect y="4" width="16" height="2" fill="var(--black)" />
              <rect y="8" width="16" height="2" fill="var(--black)" />
            </svg>
          </button>
        </div>
        <section className={showMobileNav ? 'active' : ''}>
          {children}
          <Search />
        </section>
      </nav>
      <style jsx>
        {`
          hc {
            font-weight: 600;
            font-size: 28px;
            gap: 1rem;
          }
          .nav-bar {
            top: 0;
            position: fixed;
            z-index: 100;
            display: flex;
            width: 100%;
            background: var(--light);
          }
          nav {
            display: flex;
            gap: 1rem;
            width: 100%;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--dark);
            padding: 1rem 2rem 1.1rem;
            font-size: 15px;
            font-family: var(--sans);
          }
          nav :global(a) {
            text-decoration: none;
          }
          nav :global(.DocSearch-Button) {
            background: var(--code-background);
            height: 32px;
            border-radius: 32px;
          }
          nav :global(.DocSearch-Button:hover) {
            box-shadow: none;
            background: #e8eef3;
          }
          :global(.dark) nav :global(.DocSearch-Button:hover) {
            background: #424248;
          }
          nav :global(.DocSearch-Search-Icon) {
            color: var(--dark);
            width: 16px;
          }
          nav :global(.DocSearch-Button-Placeholder),
          nav :global(.DocSearch-Button-Keys) {
            display: none;
          }
          section {
            display: flex;
            align-items: center;
            gap: 1.3rem;
            padding: 0;
          }
          button {
            display: none;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 32px;
            background: var(--gray-light);
            border-radius: 30px;
          }
          .top-row {
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
          @media screen and (max-width: 600px) {
            .nav-bar {
              border-bottom: 1px solid var(--dark);
            }
            nav {
              flex-direction: column;
              align-items: flex-start;
              border-bottom: none;
            }
            section {
              display: none;
              font-size: 15px;
            }
            section.active {
              display: flex;
            }
            button {
              display: flex;
            }
          }
        `}
      </style>
    </div>
  );
}
