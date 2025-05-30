import style from './addCard.module.css'
import plus from '../../../public/plus.svg'
import {useState} from "react";
import {Input} from "../_littleComponents/input/input.tsx";
import {DropdownMenu} from "../_littleComponents/dropdown/dropdown.tsx";

const RenderAddCard = ({title, tasks, state, ...props}) => {
    const [isToggled, setIsToggled] = useState(false);
    /*свап кнопок add card и submit*/
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    /*если бэклог, то кнопка add card будет активна*/
    const rightTitle = (title) => {
        return title === 'Backlog';
    }

    const takeTasks = (title) => {
        let findTasks;
        switch (title) {
            case 'Ready':
                findTasks = state.find(item => item.title === 'Backlog').tasks.length
                return findTasks > 0;
            case 'In Progress':
                findTasks = state.find(item => item.title === 'Ready').tasks.length
                return findTasks > 0;
            case 'Finished':
                findTasks = state.find(item => item.title === 'In Progress').tasks.length
                return findTasks > 0;
            default:
                return true;
        }
    }
    /*если заголовок бэклог,
    *   то открываем input
    * иначе
    *   если в предыдущем блоке есть таски
    *       то открываем дропдаун с тасками предыдущего блока
    *   иначе запретить взаимодействие с кнопкой add card*/

    return (
        <>
            {isToggled
                ? <> {rightTitle(title) ?
                    <Input setIsToggled={setIsToggled}/>
                    :
                    <DropdownMenu
                        title = {title}
                        state = {state}
                        setState = {props.setState}
                        setIsToggled={setIsToggled}
                    />
                }
                </>
                :
                <>{
                    takeTasks(title)
                        ?
                        <button className={style.active} onClick={handleToggle}>
                            <img src={plus} alt={'plus'}/>
                            Add card
                        </button>
                        :
                        <button className={style.inactive}>
                            <img src={plus} alt={'plus'}/>
                            Add card
                        </button>
                }</>
            }
        </>
    );
}

export {RenderAddCard}
