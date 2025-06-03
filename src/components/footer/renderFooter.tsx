import style from './footer.module.css'

const RenderFooter = ({activeTasks, finishedTasks}) => {
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