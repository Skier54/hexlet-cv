export interface NotificationDTO {
    id: number
    title: string
    description: string
    createdAt: string
}

export interface TProps {
    notifications: NotificationDTO[]
}
