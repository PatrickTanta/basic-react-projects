import './index.css'
import { AppointmentsDayView } from './components/AppointmentsDayView'
import { appointments } from './sampleData'

function App() {
    return (
        <div className="App">
            <AppointmentsDayView appointments={appointments} />
        </div>
    )
}

export default App
