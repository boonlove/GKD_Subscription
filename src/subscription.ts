import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (g.name.startsWith('开屏广告')) {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
  id: 708,
  name: 'GKD订阅-汝将收梢于花开时，一如终结诞下起始♪',
  version: 0,
  author: '一笑而过£',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/boonlove/GKD_Subscription/discussions',
  categories,
  globalGroups,
  apps: rawApps,
});
