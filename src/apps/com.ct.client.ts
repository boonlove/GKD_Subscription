import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 0,
      name: '权限提示-关注流量使用情况',
      desc: '点击[暂不]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 6000,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: '.selfservice5.activity.MealAllowanceActivityBlue',
          matches:
            '@[id="com.ct.client:id/tvLeft"][text="暂不"] +2 [vid="tvRight"][text="去开启"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26999977', // text=暂不
          ],
        },
      ],
    },
  ],
});
