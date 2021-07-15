import { registerPlugin } from '@capacitor/core';

import type { AppsFlyerPlugin } from './definitions';

const AppsFlyer = registerPlugin<AppsFlyerPlugin>('AppsFlyerPlugin', {

});

export * from './definitions';
export { AppsFlyer };