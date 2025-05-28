import style from './addCard.module.css'
import plus from '../../../public/plus.svg'
import {useState} from "react";

const RenderAddCard = (title, tasks) => {
    const [isToggled, setIsToggled] = useState(true);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    function addInfo (){
        console.log(tasks)
        setIsToggled(!isToggled)
    }

    return (
        <>
            {isToggled ?
                <button onClick={handleToggle}>
                    <img src={plus} alt={'plus'} />
                    add card
                </button>
                :
                <>
                    <input></input>
                    <button onClick={addInfo}>
                        submit
                    </button>
                </>

            }
        </>
    );
}

export {RenderAddCard}


/*
<div className={style.add__card}
     onClick={handleToggle}>
    {isToggled ?
        <div className={style.add__newTask}>
            <input></input>
            <button>Submit</button>
        </div>
        :
        <>
            <img src={plus} alt={'plus'}/>
            <span>Add card</span>
        </>
    }
</div>*/
