import style from './oneTaskInsideBlock.module.css'

/*тут рендерим одну задачу*/
const RenderOneTaskInsideBlock = () => {
    return (
        <>
            <div className={style.one__task}>
                Залупа коня
            </div>
        </>
    )
}

export {RenderOneTaskInsideBlock}