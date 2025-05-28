import style from './blockWithTasks.module.css'
import {RenderOneTaskInsideBlock} from "../oneTaskInsideBlock/oneTaskInsideBlock.tsx";

/*тут рендерим все задачи внутри блока*/
const RenderBlockWithTasks = () => {
    return (
        <>
            <div className={style.tasks}>
                <RenderOneTaskInsideBlock />
            </div>
        </>
    )
}

export {RenderBlockWithTasks}