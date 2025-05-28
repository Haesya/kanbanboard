import style from './footer.module.css'

const RenderFooter = () => {
    return (
        <div className={style.footer}>
            <div className={style.tasks}>
                <div>
                    Active tasks:
                </div>
                <div>
                    Finished tasks:
                </div>
            </div>
            <div>
                Kanban board by Mukhanova Anna, 2025 AD
            </div>
        </div>
    )
}

export {RenderFooter}