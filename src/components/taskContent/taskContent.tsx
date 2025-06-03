import style from '../taskContent/taskContent.module.css'
import cross from '../../../public/cross.svg'
import {useParams} from "react-router-dom";

const RenderTaskContent = () => {
    const params = useParams()
    console.log(params.id)
    const state = localStorage.getItem('state')
    console.log('стате',state)
    const jsonstate = JSON.parse(state)
    console.log('жисонстате',jsonstate)
    const description = jsonstate.map(elem => {
        elem.tasks.map(e => {
            if(e.id == params.id) {
                console.log(e.description)
                return e.description
            }
        })
    })

    console.log('дескрипшион',description)
    const openDescription = () => {

    }

    const saveChanges = () => {

    }

    const closeDescription = () => {

    }

    return (
        <div className={style.taskContent}>
            <div className={style.inside__task}>
                <label>Сюда название таска</label>
                <input className={style.input__description}/>
                <button className={style.save__description} onClick={saveChanges}>Сохранить</button>
            </div>
            <button className={style.close} onClick={closeDescription}>
                <img src={cross} alt={'cross'} />
            </button>
        </div>

    )
}

export {RenderTaskContent}