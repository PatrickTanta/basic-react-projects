import './App.css'
import { AppointmentsDayView } from './components/AppointmentsDayView'

function App() {
    return (
        <div className="App">
            <AppointmentsDayView
                appointments={[
                    {
                        startsAt: new Date().setHours(12, 0),
                        detail: 'Daily meeting'
                    },
                    {
                        startsAt: new Date().setHours(14, 0),
                        detail: 'Boss intervention'
                    }
                ]}
            />
        </div>
    )
}

export default App
