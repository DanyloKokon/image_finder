import App from './App.jsx';
import App2 from './App2.jsx';
import { useState } from 'react';
import Mode from '../components/Mode.jsx';
function MainApp() {
    const [mode, setMode] = useState('set2')
    const onMode = (mode) => {
        setMode(mode)
    }

    return (<>
        {mode === 'set1' ? <App /> : <App2 />}
        {/* <Mode onMode={onMode} mode={mode} /> */}
    </>);
}

export default MainApp;