import { useTranslation } from 'react-i18next';

// 此文件用于测试i18next的模拟
function I18next() {
    const { t } = useTranslation();
    return (
        <div className="i18next">
            <p>{t('i18next.title')}</p>
        </div>
    );
}

export default I18next;
