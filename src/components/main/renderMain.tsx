import style from './main.module.css'
import {RenderBlockWithTasks} from "../blockWithTasks/renderBlockWithTasks.tsx";
import {RenderAddCard} from "../addTask/renderAddCard.tsx";

/*тут рендерим мэйн и 4 блока внутри него*/
const RenderMain = ({state, ...props}) => {
    return (
        <>
            <div className={style.main}>
                {state.map(item =>
                    <div key={item.title} className={style.block}>
                        <h2>{item.title}</h2>
                        <RenderBlockWithTasks />
                        <RenderAddCard />
                    </div>
                )}
            </div>
        </>
    )
}

export {RenderMain}