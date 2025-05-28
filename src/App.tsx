import './App.css'
import {RenderHeader} from './components/header/renderHeader.tsx';
import {RenderMain} from "./components/main/renderMain.tsx";
import {RenderFooter} from "./components/footer/renderFooter.tsx";

function App() {

    return (
        <>
            <RenderHeader/>
            <RenderMain />
            <RenderFooter/>
        </>
    )
}

export default App
