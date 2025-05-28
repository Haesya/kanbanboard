import './App.css'
import {useState} from "react";
import {RenderHeader} from './components/header/renderHeader.tsx';
import {RenderMain} from "./components/main/renderMain.tsx";
import {RenderFooter} from "./components/footer/renderFooter.tsx";

function App() {
    const [state, setState] = useState([
        {
            title: 'Backlog',
            tasks: ['backlogtask1', 'backlogtask2', 'backlogtask3'],
        },
        {
            title: 'Ready',
            tasks: ['readytask1', 'readytask2', 'readytask3'],
        },
        {
            title: 'In Progress',
            tasks: ['IP1', 'IP2', 'IP3'],
        },
        {
            title: 'Finished',
            tasks: ['finished1', 'finished2', 'finished3'],
        }
    ])


    return (
        <>
                <RenderHeader/>
                <RenderMain state={state} setState={setState}/>
                <RenderFooter/>
        </>
    )
}

export default App
