import { FC } from 'react'
import './appointmentStyles.css'

export type AppointmentType = {
    startsAt: number
    detail?: string
}

interface Props {
    appointments: AppointmentType[]
}

export const AppointmentsDayView: FC<Props> = ({ appointments }) => {
    const appointmentTimeOfDay = (startsAt: number) => {
        const [h, m] = new Date(startsAt).toTimeString().split(':')
        return `${h}: ${m}`
    }

    return (
        <div className="appointments">
            <ol>
                {appointments.length ? (
                    appointments.map((item) => (
                        <li className="container" key={item.startsAt}>
                            <div className="time">
                                {appointmentTimeOfDay(item.startsAt)}
                            </div>
                            <div className="detail">
                                {item.detail ?? 'Notghing'}
                            </div>
                        </li>
                    ))
                ) : (
                    <h3>There"s are no appointments to show</h3>
                )}
            </ol>
        </div>
    )
}
