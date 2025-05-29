import style from './dropdown.module.css';

const DropdownMenu = ({setIsToggled}) => {

    const returnInfo = () => {
        setIsToggled(false)
    }

    return (
        <>
            <div className={style.dropdown__menu}>
                Тут надо будет ебануть дропдаун задач
            </div>
            <button onClick={returnInfo}>Submit</button>
        </>
    )
}

export {DropdownMenu}