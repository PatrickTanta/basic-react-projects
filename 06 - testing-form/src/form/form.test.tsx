import { Form } from './form'
import { fireEvent, render, screen } from '@testing-library/react'

describe('when the form is mounted', () => {
    beforeEach(() => {
        render(<Form />)
    })

    it('should render the form', () => {
        // expect(screen.queryByText(/create product/i)).toBeInTheDocument()0
        expect(
            screen.getByRole('heading', { name: /create product/i })
        ).toBeInTheDocument()
    })

    it('should exists the fields: name, size, type (electronic, futniture, clothing)', () => {
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/size/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/type/i)).toBeInTheDocument()

        expect(screen.queryByText(/electronic/i)).toBeInTheDocument()
        expect(screen.queryByText(/furniture/i)).toBeInTheDocument()
        expect(screen.queryByText(/clothing/i)).toBeInTheDocument()

        // screen.debug() // show the html rendered in the console
    })

    it('should exists the submit button', () => {
        expect(
            screen.getByRole('button', { name: /submit/i })
        ).toBeInTheDocument()
    })
})

describe('when the user submits the form', () => {
    it('should display validation messages', () => {
        render(<Form />)

        expect(
            screen.queryByText(/the name is required/i)
        ).not.toBeInTheDocument()
        expect(
            screen.queryByText(/the size is required/i)
        ).not.toBeInTheDocument()
        expect(
            screen.queryByText(/the type is required/i)
        ).not.toBeInTheDocument()

        fireEvent.click(screen.getByRole('button', { name: /submit/i }))

        expect(screen.queryByText(/the name is required/i)).toBeInTheDocument()
        expect(screen.queryByText(/the size is required/i)).toBeInTheDocument()
        expect(screen.queryByText(/the type is required/i)).toBeInTheDocument()
    })
})

describe('when the user blurs an empty field', () => {
    it('should display a validation error message for the input name', () => {
        render(<Form />)
        fireEvent.blur(screen.getByLabelText(/name/i), {
            target: { name: 'name', value: '' }
        })
        expect(screen.queryByText(/the name is required/i)).toBeInTheDocument()
    })
    it('should display a validation error message for the input size', () => {
        render(<Form />)
        fireEvent.blur(screen.getByLabelText(/size/i), {
            target: { name: 'size', value: '' }
        })
        expect(screen.queryByText(/the size is required/i)).toBeInTheDocument()
    })
})
