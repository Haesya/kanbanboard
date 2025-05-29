import style from './input.module.css'
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Input = ({setIsToggled}) => {
    function addInfo() {
        console.log('Все протыкивается')
        setIsToggled(false)
    }

    const handleClose = () => {
        setIsToggled(false)
    }

    return (
        <>
            <ClickAwayListener onClickAway={handleClose}>
                <div className={style.add__new__task}>
                    <input className={style.input}></input>
                    <button className={style.submit} onClick={addInfo}>Submit</button>
                </div>
            </ClickAwayListener>
        </>
    )
}

export {Input}