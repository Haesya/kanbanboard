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
            const taskId = e.target.id
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

    const [rotateArrow, setRotateArrow] = useState(false)

    /*обязательно селектом? селект нельзя редактировать адекватно, чтобы ближе к макету было*/
    return (
        <>
            <ClickAwayListener onClickAway={handleClose}>
                <div className={style.container}>
                    <label type="button" className={style.dropdown__menu} onClick={handleDropdownClick}>
                        <img
                            className={rotateArrow ? style.arrow__rotate : style.arrow}
                            src={arrow}
                            alt={'arrow'}
                            onClick={() => setRotateArrow(!rotateArrow)}
                        />
                    </label>
                    <div className={style.dropdown}>
                        <ul>
                            {
                                dropdownState.open && data.tasks.map(item => {
                                    return (
                                        <li value={item.id}
                                            id={item.id}
                                            key={item.id}
                                            onClick={movingTasks}
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