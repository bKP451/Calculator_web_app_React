// The Screen component will be the top section of the wrapper component.
// Purpose is to display the calculated values

// To display output resize on length

import { Textfit } from "react-textfit";
import "./screen.css";

const Screen = ({value}) => {
    return (
        <Textfit className="screen" mode="single" max={70} >
            {value}
        </Textfit>
    )
}

export default Screen;