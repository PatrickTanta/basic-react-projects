import { FC } from 'react'

interface Props {
    customer: { firstName: string }
}

export const Appointment: FC<Props> = ({ customer }) => {
    const appointmentTimeOfDay = (startsAt: string) => {
        const [h, m] = new Date(startsAt).toTimeString().split(':')
        return `${h}: ${m}`
    }

    return (
        <div>
            <h1>{customer.firstName}</h1>
        </div>
    )
}
