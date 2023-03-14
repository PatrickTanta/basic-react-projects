import { FC, useState, MouseEventHandler } from 'react'
import './appointmentStyles.css'
import { Appointment, AppointmentType } from './Appointment'
import { AppointmentDayViewItem } from './AppointmentDayViewItem'

interface Props {
    appointments: AppointmentType[]
}

export const AppointmentsDayView: FC<Props> = ({ appointments }) => {
    const [selectedAppointment, setSelectedAppointment] = useState(0)

    const selectAppointment = (i: number): void => {
        setSelectedAppointment(i)
    }

    return (
        <div className="appointments">
            <ol>
                {appointments.length ? (
                    appointments.map((item, i) => (
                        <AppointmentDayViewItem
                            startsAt={item.startsAt}
                            key={item.startsAt}
                            position={i}
                            onSelectAppointment={selectAppointment}
                        />
                    ))
                ) : (
                    <p>There are no appointments to show</p>
                )}
            </ol>

            <div className="appointment__detail">
                <Appointment {...appointments[selectedAppointment]} />
            </div>
        </div>
    )
}
