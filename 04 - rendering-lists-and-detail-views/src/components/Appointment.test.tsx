import ReactDOM from 'react-dom/client'
import { Appointment } from './Appointment'
import { render, screen } from '@testing-library/react'

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' }
        render(<Appointment customer={customer} />)
        expect(screen.getByText('Ashly')).toBeInTheDocument()
        // expect(document.body.textContent).toMatch('Ashley')
    })
})
