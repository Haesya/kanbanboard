import style from './main.module.css'
import {RenderAddCard} from "../addTask/renderAddCard.tsx";
import {RenderOneTaskInsideBlock} from "../oneTaskInsideBlock/oneTaskInsideBlock.tsx";

/*тут рендерим мэйн и 4 блока внутри него*/
const RenderMain = ({state, ...props}) => {

    return (
        <>
            <div className={style.main}>
                {state.map(item =>
                    <div key={item.title} className={style.block}>
                        <h2>{item.title}</h2>
                        {
                            item.tasks.length
                                ?
                                item.tasks.map(item =>
                                    <RenderOneTaskInsideBlock key={item.id} id={item.id}>
                                        {item.task}
                                    </RenderOneTaskInsideBlock>
                                )
                                : <div>No tasks</div>
                        }
                        <RenderAddCard
                            title = {item.title}
                            tasks = {item.tasks}
                            state = {state}
                            setState = {props.state}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export {RenderMain}