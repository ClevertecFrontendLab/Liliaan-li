import { Typography } from '@components/typography/typography.tsx';
import { Card } from '@components/card';
import s from './footer-main-page.module.scss';
import { Button } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const FooterMainPage = () => {
    return (
        <div className={s.footer_container}>
            <Button type='link' className={s.button_watch_reviews_style}>
                <Typography.H6>Смотреть отзывы</Typography.H6>
            </Button>

            <Card className={s.footer_card}>
                <div className={s.download_info}>
                    <Button type='link' className={s.button_download_info_style}>
                        <Typography.H6>Скачать на телефон</Typography.H6>
                    </Button>
                    <Typography.RegularBody
                        style={{ color: 'var(--character-light-secondary-45)' }}
                    >
                        Доступно в PRO-тарифе
                    </Typography.RegularBody>
                </div>

                <div className={s.download_links}>
                    <Button type='link' className={s.download_links_buttons_style}>
                        <AndroidFilled />
                        <Typography.RegularBody>Android OS</Typography.RegularBody>
                    </Button>
                    <Button type='link' className={s.download_links_buttons_style}>
                        <AppleFilled />
                        <Typography.RegularBody>Apple iOS</Typography.RegularBody>
                    </Button>
                </div>
            </Card>
        </div>
    );
};
