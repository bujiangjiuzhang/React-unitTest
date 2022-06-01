import i18n from 'i18next';

import zhTW from './locales/zh-cn.json';
import zhCN from './locales/zh-tw.json';

i18n.init({
// we init with resources
resources: {
    'zh-TW': {
    translations: zhTW,
    },
    'zh-CN': {
    translations: zhCN,
    },
},
lng: localStorage.getItem('language') || 'zh-TW',
fallbackLng: 'zh-TW',
debug: false,

// have a common namespace used around the full app
ns: ['translations'],
defaultNS: 'translations',

// keySeparator: false, // we use content as keys

interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
},

react: {
    wait: true,
},
});

export default i18n;