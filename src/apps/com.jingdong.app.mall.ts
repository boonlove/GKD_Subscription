import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击[跳过]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 6000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainFrameActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/26999915', // text=取消
          ],
        },
      ],
    },
  ],
});
