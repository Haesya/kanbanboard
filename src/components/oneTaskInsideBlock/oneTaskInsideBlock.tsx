import {Link} from "react-router-dom";
import style from './oneTaskInsideBlock.module.css'

/*тут рендерим одну задачу*/
const RenderOneTaskInsideBlock = ({ children, id }) => {

    return (
        <Link className={style.one__task} to={`${id}`}>
            {children}
        </Link >
    );
}

export {RenderOneTaskInsideBlock}