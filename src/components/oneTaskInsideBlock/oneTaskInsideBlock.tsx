import {Link} from "react-router-dom";

/*тут рендерим одну задачу*/
const RenderOneTaskInsideBlock = ({ children, id }) => {

    return (
        <Link to={`task${id}`}>
            {children}
        </Link >
    );
}

export {RenderOneTaskInsideBlock}