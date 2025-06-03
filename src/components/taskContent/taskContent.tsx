import style from '../taskContent/taskContent.module.css'
import cross from '../../../public/cross.svg'

const RenderTaskContent = () => {
    const saveChanges = () => {

    }

    return (
        <div className={style.taskContent}>
            <div className={style.inside__task}>
                <label>Сюда надо засунуть название таска</label>
                <input className={style.input__description}/>
                <button className={style.save__description}>Сохранить</button>
            </div>
            <button className={style.close} onClick={saveChanges}>
                <img src={cross} alt={'cross'} />
            </button>
        </div>

    )
}

export {RenderTaskContent}