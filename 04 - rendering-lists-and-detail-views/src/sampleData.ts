export const today = new Date()
export const at = (hours: number) => today.setHours(hours, 0)

export const appointments = [
    {
        startsAt: at(9),
        customer: {
            firstName: 'Charlie',
            lastName: 'Gonzales',
            phone: '946784354',
            service: 'Manicure',
            notes: 'Daily meeting New 1'
        }
    },
    {
        startsAt: at(10),
        customer: {
            firstName: 'Frankie',
            lastName: ' Quispe',
            phone: '946783124',
            service: 'Sport',
            notes: 'Soccer session'
        }
    },
    {
        startsAt: at(11),
        customer: {
            firstName: 'Casey',
            lastName: 'Berth',
            phone: '946784354',
            service: 'Pedistri',
            notes: 'Daily meeting 2'
        }
    },
    {
        startsAt: at(12),
        customer: {
            firstName: 'Robert',
            lastName: 'Boss',
            phone: '946784354',
            service: 'Scrum',
            notes: 'Scrumbn retrospective'
        }
    },
    {
        startsAt: at(13),
        customer: {
            firstName: 'Jordan',
            lastName: 'Gonzales',
            phone: '946784354',
            service: 'Manicure',
            notes: 'Daily meeting'
        }
    },
    {
        startsAt: at(14),
        customer: {
            firstName: 'Jay',
            lastName: 'Gonzales',
            phone: '946784354',
            service: 'Manicure',
            notes: 'Daily meeting'
        }
    },
    {
        startsAt: at(15),
        customer: {
            firstName: 'Alex',
            lastName: 'Gonzales',
            phone: '946784354',
            service: 'Manicure',
            notes: 'Daily meeting'
        }
    },
    {
        startsAt: at(16),
        customer: {
            firstName: 'Jules',
            lastName: 'Gonzales',
            phone: '946784354',
            service: 'Manicure',
            notes: 'Daily meeting'
        }
    },
    {
        startsAt: at(17),
        customer: {
            firstName: 'Stevie',
            lastName: 'Gonzales',
            phone: '946784354',
            service: 'Manicure',
            notes: 'Daily meeting'
        }
    }
]
