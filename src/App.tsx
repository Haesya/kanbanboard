import './App.css'
import {useState} from "react";
import {RenderHeader} from './components/header/renderHeader.tsx';
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


    return (
        <>
            <RenderHeader/>
            <RenderMain state={state} setState={setState}/>
            <RenderFooter/>
        </>
    )
}

export default App
