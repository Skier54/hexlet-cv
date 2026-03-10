import { Stack, Paper, Text } from '@mantine/core'
import { EmptyPlaceholder } from '@shared/ui'
import { IconBellX } from '@tabler/icons-react'
import { getDaysDiff, getRelativeDayI18nKey } from '@shared/lib'
import { useTranslation } from 'react-i18next'
import type { TProps } from '@widgets/notifications/types'

export const NotificationsList: React.FC<TProps> = (props): JSX.Element => {
    const { notifications } = props
    const { t } = useTranslation()

    const relativeTimeText = {
        today: t('accountPage.notifications.today'),
        yesterday: t('accountPage.notifications.yesterday'),
        daysAgo: t('accountPage.notifications.daysAgo'),
    }

    if (!notifications.length) {
        return (
            <EmptyPlaceholder
                title={t('accountPage.notifications.noNotifications')}
                icon={IconBellX}
            />
        )
    }

    return (
        <Stack align='stretch' gap='sm'>
            {notifications.map(not => {
                const daysDifference = getDaysDiff(not.createdAt)
                const i18key = getRelativeDayI18nKey(daysDifference)
                return (
                    <Paper radius='lg' withBorder p='md'>
                        <Text size='lg'>{not.title}</Text>
                        <Text>{not.description}</Text>
                        <Text size='sm' pt='xs'>{relativeTimeText[i18key]}</Text>
                    </Paper>
                )
            })}
        </Stack>
    )
}