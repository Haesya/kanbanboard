import style from './footer.module.css'

const RenderFooter = ({state}) => {
    const finishedTasks = state[3].tasks.length
    const activeTasks = state[0].tasks.length + state[1].tasks.length + state[2].tasks.length
    return (
        <div className={style.footer}>
            <div className={style.tasks}>
                <div>
                    Active tasks: {activeTasks}
                </div>
                <div>
                    Finished tasks: {finishedTasks}
                </div>
            </div>
            <div>
                Kanban board by Mukhanova Anna, 2025 AD
            </div>
        </div>
    )
}

export {RenderFooter}