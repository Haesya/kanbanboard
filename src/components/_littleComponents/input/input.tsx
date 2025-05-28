import style from './input.module.css'
const Input = ({setIsToggled}) => {
    function addInfo (){
        console.log('Все протыкивается')
        setIsToggled(false)
    }

    return(
        <>
            <input className={style.input}></input>
            <button className={style.submit} onClick={addInfo}>Submit</button>
        </>
    )
}

export {Input}