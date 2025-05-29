import './App.css'
import {useState} from "react";
import {RenderHeader} from './components/header/renderHeader.tsx';
import {RenderMain} from "./components/main/renderMain.tsx";
import {RenderFooter} from "./components/footer/renderFooter.tsx";

function App() {
    const [state, setState] = useState([
        {
            title: 'Backlog',
            tasks: [
                {
                    id: '1',
                    task: "backlogtask1",
                    desc: "backlogdescription1",
                },
                {
                    id: '2',
                    task: "backlogtask2",
                    desc: "backlogdescription2",
                }]
        },
        {
            title: 'Ready',
            tasks: [{
                id: '1',
                task: "readytask1",
                desc: "readydescription1",
            },
                {
                    id: '2',
                    task: "readybacklogtask2",
                    desc: "readydescription2",
                }],
        },
        {
            title: 'In Progress',
            tasks: [],
        },
        {
            title: 'Finished',
            tasks: [],
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
