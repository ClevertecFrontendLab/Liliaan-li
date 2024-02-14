import React, { useState } from 'react';
import s from './main-page.module.scss';
import { Layout, Menu } from 'antd';
import {
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { IconFont } from '@constants/icon-font/icon-font.ts';
import { ContentPartMainPage } from '@layouts/for-main-page/contentpart-main-page/contentpart-main-page.tsx';
import { FooterMainPage } from '@layouts/for-main-page/footer-main-page/footer-main-page.tsx';
import { HeaderMainPage } from '@layouts/for-main-page/header-main-page/header-main-page.tsx';
import { Typography } from '@components/typography/typography.tsx';
import { useWindowSize } from '@hooks/window-size/use-window-size.ts';
import {Logo} from "@assets/logo/logo.tsx";
import {LogoShort} from "@assets/logo/logo_short.tsx";

const { Header, Sider, Content } = Layout;
export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const windowSize = useWindowSize();
    return (
        <Layout className={s.mainPage_layout}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                theme={'light'}
                className={s.sidebar}
                width={windowSize && windowSize < 541 ? '104' : '200'}
                collapsedWidth={windowSize && windowSize < 541 ? '0' : '80'}
            >
                <Menu
                    className={s.menu}
                    theme='light'
                    mode='inline'
                    items={[
                        {
                            key: '1',
                            icon: collapsed ? (
                                <LogoShort size={30} />
                            ) : (
                                <Logo size={windowSize && windowSize < 541 ? 70 : 133} />
                            ),
                            disabled: true,
                            className: collapsed
                                ? `${s.collapsed_logo}`
                                : `${s.collapsed_for_min_width}`,
                        },
                    ]}
                />
                <Menu
                    theme='light'
                    mode='inline'
                    className={s.menu}
                    items={[
                        {
                            key: '2',
                            icon: <CalendarOutlined className={s.icons_style} />,
                            label: (
                                <Typography.RegularBody
                                    style={{ color: 'var(--character-light-title-85)' }}
                                >
                                    Календарь
                                </Typography.RegularBody>
                            ),
                            className: `${!collapsed && s.ant_menu_item}`,
                        },
                        {
                            key: '3',
                            icon: <HeartFilled className={s.icons_style} />,
                            label: (
                                <Typography.RegularBody
                                    style={{ color: 'var(--character-light-title-85)' }}
                                >
                                    Тренировки
                                </Typography.RegularBody>
                            ),
                            className: `${!collapsed && s.ant_menu_item}`,
                        },
                        {
                            key: '4',
                            icon: <TrophyFilled className={s.icons_style} />,
                            label: (
                                <Typography.RegularBody
                                    style={{ color: 'var(--character-light-title-85)' }}
                                >
                                    Достижения
                                </Typography.RegularBody>
                            ),
                            className: `${!collapsed && s.ant_menu_item}`,
                        },
                        {
                            key: '5',
                            icon: <IdcardOutlined className={s.icons_style} />,
                            label: (
                                <Typography.RegularBody
                                    style={{ color: 'var(--character-light-title-85)' }}
                                >
                                    Профиль
                                </Typography.RegularBody>
                            ),
                            className: `${!collapsed && s.ant_menu_item}`,
                        },
                    ]}
                />
                <Menu
                    className={s.exit}
                    theme='light'
                    mode='inline'
                    items={[
                        {
                            key: '6',
                            icon: (
                                <IconFont
                                    type='icon-tuichu'
                                    className={s.icons_style}
                                    style={{ transform: 'rotate(180deg)' }}
                                />
                            ),
                            label: (
                                <Typography.RegularBody
                                    style={{ color: 'var(--character-light-title-85)' }}
                                >
                                    Выход
                                </Typography.RegularBody>
                            ),
                            className: `${!collapsed && s.ant_exit_item}`,
                        },
                    ]}
                />
                <div data-test-id='sider-switch' className={s.mainPage_button}>
                    <span data-test-id='sider-switch-mobile'>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: `${s.trigger}`,
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </span>
                </div>
            </Sider>
            <Layout>
                <Header className={s.header}>
                    <HeaderMainPage />
                </Header>
                <Content className={s.content}>
                    <ContentPartMainPage />
                    <FooterMainPage />
                </Content>
            </Layout>
        </Layout>
    );
};
