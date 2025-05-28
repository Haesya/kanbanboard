import style from './main.module.css'
import {RenderBlockWithTasks} from "../blockWithTasks/renderBlockWithTasks.tsx";

/*тут рендерим мэйн и 4 блока внутри него*/
const RenderMain = ({state, ...props}) => {
    return (
        <>
            <div className={style.main}>
                {state.map(item =>
                    <div key={item.title} className={style.block}>
                        <h2>{item.title}</h2>
                        <RenderBlockWithTasks />
                        <div>Add Card</div>
                    </div>
                )}
            </div>
        </>
    )
}

export {RenderMain}