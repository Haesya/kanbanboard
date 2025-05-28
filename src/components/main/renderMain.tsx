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
                        <RenderAddCard
                            title={item.title}
                            tasks={item.tasks}
                            state={state}
                            setState={props.setState}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export {RenderMain}