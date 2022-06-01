import { useTranslation } from 'react-i18next';
import './index.css'

// 此文件用于测试i18next的模拟
function I18next() {
    const { t } = useTranslation();
    console.log('useTranslation', t)
    console.log('000', t('i18next.title'))
    return (
        <div className="i18next">
            {t('i18next.title')}
        </div>
    );
}

export default I18next;
