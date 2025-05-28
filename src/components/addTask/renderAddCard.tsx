import style from './addCard.module.css'
import plus from '../../../public/plus.svg'
const RenderAddCard = () => {
    return (
        <div className={style.add__card}>
            <img src={plus} alt={'plus'}/>Add card
        </div>
    )
}

export {RenderAddCard}