import { FC, MouseEventHandler } from 'react'

export type AppointmentDayViewItemType = {
    startsAt: number
    position: number
    onSelectAppointment: (i: number) => void
}

export const AppointmentDayViewItem: FC<AppointmentDayViewItemType> = ({
    startsAt,
    position,
    onSelectAppointment
}) => {
    const appointmentTimeOfDay = (startsAt: number) => {
        const [h, m] = new Date(startsAt).toTimeString().split(':')
        return `${h}: ${m}`
    }

    return (
        <li key={startsAt}>
            <button
                type="button"
                className="time"
                onClick={() => onSelectAppointment(position)}
            >
                {appointmentTimeOfDay(startsAt)}
            </button>
        </li>
    )
}
