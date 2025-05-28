import style from './addCard.module.css'
import plus from '../../../public/plus.svg'
import {useState} from "react";
import {Input} from "../_littleComponents/input/input.tsx";

const RenderAddCard = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    return (
        <>
            {isToggled ?
                <Input setIsToggled={setIsToggled}/>
                :
                <button className={style.add__card} onClick={handleToggle}>
                    <img src={plus} alt={'plus'} />
                    Add card
                </button>


            }
        </>
    );
}

export {RenderAddCard}
