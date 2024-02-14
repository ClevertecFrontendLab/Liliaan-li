import { Typography } from '@components/typography/typography.tsx';
import { Card } from '@components/card';
import { Button } from 'antd';
import s from './contentpart-main-page.module.scss';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';
export const ContentPartMainPage = () => {
    return (
        <div className={s.contentPart_container}>
            <Card className={s.card_for_text}>
                <Typography.H6 style={{ color: 'var(--primary-light-9)' }}>
                    С CleverFit ты сможешь: <br />— планировать свои тренировки на календаре,
                    выбирая тип и уровень нагрузки; <br />— отслеживать свои достижения в разделе
                    статистики, сравнивая свои результаты с нормами и рекордами; <br />— создавать
                    свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;
                    <br />— выполнять расписанные тренировки для разных частей тела, следуя
                    подробным инструкциям и советам профессиональных тренеров.
                </Typography.H6>
            </Card>

            <Card className={s.card_for_text}>
                <Typography.H4>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Typography.H4>
            </Card>

            <div className={s.functions_container}>
                <Card className={s.card}>
                    <Typography.H6 className={s.text_style}>Расписать тренировки</Typography.H6>
                    <Button type='link' className={s.button_content_style}>
                        <HeartFilled />
                        <Typography.RegularBody>Тренировки</Typography.RegularBody>
                    </Button>
                </Card>
                <Card className={s.card}>
                    <Typography.H6 className={s.text_style}>Назначить календарь</Typography.H6>
                    <Button type='link' className={s.button_content_style}>
                        <CalendarOutlined />
                        <Typography.RegularBody>Календарь</Typography.RegularBody>
                    </Button>
                </Card>
                <Card className={s.card}>
                    <Typography.H6 className={s.text_style}>Заполнить профиль</Typography.H6>
                    <Button type='link' className={s.button_content_style}>
                        <IdcardOutlined />
                        <Typography.RegularBody>Профиль</Typography.RegularBody>
                    </Button>
                </Card>
            </div>
        </div>
    );
};
