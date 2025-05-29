import style from './dropdown.module.css';
import {useState} from "react";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import arrow from '../../../../public/blackArrow.svg'

const DropdownMenu = ({title, tasks, state, setState, setIsToggled}) => {

    const handleClose = () => {
        setIsToggled(false)
    }
    const showData = (title) => {
        let data;
        switch (title) {
            case 'Ready':
                data = state.find(num => num.title === 'Backlog');
                console.log('выводим данные блока ready', data)
                break;
            case 'In Progress':
                data = state.find(num => num.title === 'Ready');
                console.log('выводим данные блока inp', data)
                break;
            case 'Finished':
                data = state.find(num => num.title === 'In Progress');
                console.log('выводим данные блока finished', data)
                break;
            default:
                break;
        }
        return data
    }

    const movingTasks = e => {
        const data = showData(title)
        const newTasks = state.map(board => {
            let taskId = +e.target.value;
            let newTask = data.tasks.find(obj => obj.id === taskId)
            //удаление из предыдущего task
            if (board.title === data.title) {
                return {...board, tasks: data.tasks.filter(task => task.id !== taskId)}
            }
            //добавление в новый task
            if (board.title === title) {
                return {...board, tasks: [...board.tasks, newTask]}
            }
            return board;
        })
        setState(newTasks);
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
                    <div className={style.dropdown} >
                        <ul>
                            {
                                dropdownState.open && showData(title).tasks.map(item =>{
                                return (
                                <li key={item.id}>
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