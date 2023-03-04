import { FC, useState } from 'react'
import { Button, InputLabel, Select, TextField } from '@mui/material'

export const Form: FC = () => {
    const [formErrors, setFormErrors] = useState({
        name: '',
        size: '',
        type: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { name, size, type } = e.target?.elements

        if (!name.value) {
            setFormErrors((prevState) => ({
                ...prevState,
                name: 'The name is required'
            }))
        }

        if (!size.value) {
            setFormErrors((prevState) => ({
                ...prevState,
                size: 'The size is required'
            }))
        }

        if (!type.value) {
            setFormErrors((prevState) => ({
                ...prevState,
                type: 'The type is required'
            }))
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormErrors((prevState) => ({
            ...prevState,
            [name]: value.length ? '' : `The ${name} is required`
        }))
    }

    return (
        <div>
            <h1>create product</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="name"
                    id="name"
                    helperText={formErrors.name}
                    onBlur={handleBlur}
                />

                <TextField
                    label="size"
                    id="size"
                    helperText={formErrors.size}
                    onBlur={handleBlur}
                />

                <InputLabel htmlFor="type">Type</InputLabel>
                <Select
                    native
                    id="type"
                    inputProps={{ name: 'type', id: 'type' }}
                >
                    <option aria-label="None" value="" />
                    <option value="electronic">Electronic</option>
                    <option value="furniture">Furniture</option>
                    <option value="clothing">Clothing</option>
                </Select>
                {formErrors.type.length && <p>{formErrors.type}</p>}

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
