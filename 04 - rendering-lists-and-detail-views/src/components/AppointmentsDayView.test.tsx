import { AppointmentsDayView, AppointmentType } from './AppointmentsDayView'
import { render, screen } from '@testing-library/react'

describe('AppointmentDayViewDayView', () => {
    const today = new Date()
    const twoAppointments: AppointmentType[] = [
        { startsAt: today.setHours(12, 0), detail: 'Daily meeting' },
        { startsAt: today.setHours(13, 0), detail: 'Partners meeting' }
    ]

    test('render an ol element to display appointments', () => {
        render(<AppointmentsDayView appointments={[]} />)
        const listElement = document.querySelector('ol')
        expect(listElement).not.toBeNull()
    })

    test('should display the component with a list of appointment', () => {
        render(<AppointmentsDayView appointments={twoAppointments} />)
        const listChildren = document.querySelectorAll('ol > li')
        expect(listChildren).toHaveLength(2)
    })

    test('should render the time of each appointment', () => {
        render(<AppointmentsDayView appointments={twoAppointments} />)

        const listChildren = document.querySelectorAll('li > .time')
        expect(listChildren[0].textContent).toEqual('12: 00')
        expect(listChildren[1].textContent).toEqual('13: 00')
    })

    test('should initially shows a message saying there are no appointments today', () => {
        render(<AppointmentsDayView appointments={[]} />)
        expect(
            screen.getByRole('heading', 'There"s no appointments to show')
        ).toBeInTheDocument()
    })
})
