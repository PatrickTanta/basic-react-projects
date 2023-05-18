import { FC } from 'react'

export type AppointmentType = {
    startsAt: number
    detail?: string
    customer?: {
        firstName: string
        lastName?: string
        phone?: string
        service?: string
        notes?: string
    }
}

export const Appointment: FC<AppointmentType> = (props) => {
    const appointmentTimeOfDay = (startsAt: number) => {
        const [h, m] = new Date(startsAt).toTimeString().split(':')
        return `${h}: ${m}`
    }

    return (
        <div className="appointment">
            <p className="time">
                {`Today"s appointment at ${appointmentTimeOfDay(
                    props.startsAt
                )}`}
            </p>
            <div className="appointment__content">
                <div className="subtitle">Customer</div>
                <div className="description" data-testid="name">{`${
                    props.customer?.firstName
                }${` ${props.customer?.lastName ?? ''}`}`}</div>
            </div>
            <div className="appointment__content">
                <div className="subtitle">Phone Number</div>
                <div className="description">{props.customer?.phone}</div>
            </div>
            <div className="appointment__content">
                <div className="subtitle">Service</div>
                <div className="description">{props.customer?.service}</div>
            </div>
            <div className="appointment__content">
                <div className="subtitle">Notes</div>
                <div className="description">{props.customer?.notes}</div>
            </div>
        </div>
    )
}
