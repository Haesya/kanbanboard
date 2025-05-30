import style from './dropdown.module.css';
import {useState} from "react";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import arrow from '../../../../public/blackArrow.svg'

const DropdownMenu = ({title, state, setState, setIsToggled}) => {

    const handleClose = () => {
        setIsToggled(false)
    }
    let data;
    switch (title) {
        case 'Ready':
            data = state.find(num => num.title === 'Backlog');
            break;
        case 'In Progress':
            data = state.find(num => num.title === 'Ready');
            break;
        case 'Finished':
            data = state.find(num => num.title === 'In Progress');
            break;
        default:
            break;
    }

    const movingTasks = e => {
        const newTasks = state.map(block => {
            const taskId = +e.target.value
            let movableElement
            data.tasks.forEach(elem => {
                if (elem.id == taskId) {
                    movableElement = elem
                }
            })

            if (block.title == data.title) {
                return {...block, tasks: data.tasks.filter(task => task.id != taskId)}
            }
            if (block.title == title) {
                return {...block, tasks: [...block.tasks, movableElement]}
            }
            return block;
        })
        setState(newTasks)
        handleClose()
    }


    const [dropdownState, setDropdownState] = useState({open: false});
    const handleDropdownClick = () => setDropdownState({open: !dropdownState.open});

    return (
        <>
            <ClickAwayListener onClickAway={handleClose}>
                <div className={style.container}>
                    <label type="button" className={style.dropdown__menu} onClick={handleDropdownClick}>
                        <img src={arrow} alt={'arrow'}/>
                    </label>
                    <div className={style.dropdown}>
                        <ul>
                            {
                                dropdownState.open && data.tasks.map(item => {
                                    return (
                                        <li onClick={movingTasks}
                                            value={item.id}
                                            key={item.id}
                                        >
                                            {item.task}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </ClickAwayListener>
        </>

    )
}

export {DropdownMenu}