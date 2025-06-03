import style from './input.module.css'
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {useState} from "react";

const Input = ({state, setState, setIsToggled}) => {
    const [task, setTask] = useState('')

    const addNewTask = ()=> {
        if(task.length > 0) {
            state[0].tasks.push ({
                id: Date.now(),
                task: task,
                description: 'This task has no description',
            })

            setState([...state]);
        }
        handleClose()
    }

    const handleClose = () => {
        setIsToggled(false)
    }

    return (
        <>
            <ClickAwayListener onClickAway={handleClose}>
                <div className={style.add__new__task}>
                    <input className={style.input} onChange={e => setTask(e.target.value)}></input>
                    <button className={style.submit} onClick={addNewTask}>Submit</button>
                </div>
            </ClickAwayListener>
        </>
    )
}

export {Input}