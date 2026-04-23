import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 0,
      name: '更新提示',
      desc: '点击[取消]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 6000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.view.main.MainActivity',
          matches:
            '[name="android.view.View"] > [text="取消"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/26904810', // text=取消
          ],
        },
      ],
    },
  ],
});
