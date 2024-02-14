import React from 'react';
import { Typography } from '@components/typography/typography.tsx';
import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import s from './header-main-page.module.scss';
export const HeaderMainPage: React.FC = () => {
    return (
        <div className={s.header_container}>
            <Typography.RegularBody>Главная</Typography.RegularBody>
            <div className={s.greeting_panel}>
                <Typography.H1 className={s.greeting}>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Typography.H1>
                <Button type='link' className={s.button_header_style}>
                    <div className={s.settings_icon_wrapper}>
                        <SettingOutlined className={s.settings_icon} />
                    </div>

                    <Typography.RegularBody className={s.settings_text}>
                        Настройки
                    </Typography.RegularBody>
                </Button>
            </div>
        </div>
    );
};
