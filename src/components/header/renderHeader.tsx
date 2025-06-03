import style from './header.module.css'
import avatar from '../../../public/avatar.svg'
import arrow from '../../../public/whiteArrow.svg'
import {useState} from "react";

const RenderHeader = () => {
    const [visible, setVisible] = useState(false)


    return (
        <>
        <header className={style.header}>
            <div>
                <h1>Awesome Kanban Board</h1>
            </div>
            <div className={style.profile}>
                <img className={style.profile__picture} src={avatar} alt={'avatar'}/>
                <button
                    className={style.profile__button}
                    onClick={()=> setVisible(!visible)}
                >
                    <img className={style.arrow} src={arrow} alt={'arrow'} />
                    <div className={visible ? style.burger__menu : style.no__burger__menu}>
                        <div>Profile</div>
                        <div>Log Out</div>
                    </div>
                </button>
            </div>
        </header>
        </>
    )
}

export {RenderHeader}