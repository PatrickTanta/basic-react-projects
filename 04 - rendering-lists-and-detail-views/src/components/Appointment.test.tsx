import { Appointment } from './Appointment'
import { render, screen } from '@testing-library/react'

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' }
        render(<Appointment customer={customer} startsAt={0} />)
        expect(screen.getByText('Ashley')).toBeInTheDocument()
        // expect(document.body.textContent).toMatch('Ashley')
    })
})
