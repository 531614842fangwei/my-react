import ReactDOM from './lib/react-dom'
import App from './page/App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(App, document.getElementById('root'))
registerServiceWorker()
