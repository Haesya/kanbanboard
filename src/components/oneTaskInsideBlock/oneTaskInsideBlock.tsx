import style from './oneTaskInsideBlock.module.css'

/*тут рендерим одну задачу*/
const RenderOneTaskInsideBlock = () => {
    return (
        <>
            <div className={style.oneTask}>
                Залупа коня
            </div>
        </>
    )
}

export {RenderOneTaskInsideBlock}