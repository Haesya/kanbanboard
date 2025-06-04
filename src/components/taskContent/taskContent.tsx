import style from '../taskContent/taskContent.module.css'
import cross from '../../../public/cross.svg'
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";

const RenderTaskContent = ({state, setState}) => {
    const [desc, setDesc] = useState('')
    const params = useParams()

    const findTask = () => {
        let param
        if (localStorage.getItem('OpenTask') === null) {
            param = params.id
            localStorage.setItem('OpenTask', param)
        } else {
            param = localStorage.getItem('OpenTask')
        }
        let taskkk
        state.map(elem => {
            elem.tasks.map(e => {
                if (e.id == param) {
                    taskkk = elem
                }
            })
        })
        return taskkk
    }

    const openTitle = () => {
        let taskk = findTask()
        return taskk.tasks[0].task
    }

    const openDescription = () => {
        let taskkk = findTask()
        return taskkk.tasks[0].description
    }

    const saveChanges = () => {
        const newDescription = desc
        const needToChange = findTask()
        needToChange.tasks[0].description = newDescription
        setState(state)
    }

    const navigate = useNavigate();
    const closeDescription = () => {
        localStorage.removeItem('OpenTask')
        navigate(-1)
    }

    return (
        <div className={style.taskContent}>
            <div className={style.inside__task}>
                <label>{openTitle()}</label>
                <textarea
                    className={style.input__description}
                    placeholder='Введите описание задачи.'
                    defaultValue={openDescription()}
                    onChange={e => setDesc(e.target.value)}
                />
                <button
                    className={style.save__description}
                    onClick={saveChanges}
                >
                    Сохранить
                </button>
            </div>
            <button
                className={style.close}
                onClick={closeDescription}
            >
                <img src={cross} alt={'cross'}/>
            </button>
        </div>

    )
}

export {RenderTaskContent}