import './App.css'
import {useEffect, useState} from "react";
import {RenderHeader} from "./components/header/renderHeader.tsx";
import {RenderMain} from "./components/main/renderMain.tsx";
import {RenderFooter} from "./components/footer/renderFooter.tsx";

function App() {
    const [state, setState] = useState(
        [
            {title: 'Backlog', tasks: []},
            {title: 'Ready', tasks: [],},
            {title: 'In Progress', tasks: [],},
            {title: 'Finished', tasks: [],}
        ])

    useEffect(() => {
        const tasks = localStorage.getItem('state');
        setState(JSON.parse(tasks))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('state', JSON.stringify(state))
    }, [state]);

    const finishedTasks = state[3].tasks.length
    const activeTasks = state[0].tasks.length + state[1].tasks.length + state[2].tasks.length

    return (
            <>
                <RenderHeader />
                <RenderMain state={state} setState={setState} />
                <RenderFooter activeTasks={activeTasks} finishedTasks={finishedTasks} />
            </>
    )
}

export default App
