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

    return (
            <>
                <RenderHeader />
                <RenderMain state={state} setState={setState} />
                <RenderFooter state={state} setState={setState}/>
            </>
    )
}

export default App
