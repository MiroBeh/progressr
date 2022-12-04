import { Meter } from "grommet";
import { useRecoilValue } from "recoil";

import { imageTextState, percentageState } from "../utils/recoil-states";

export const Canvas = () => {
    const percentage = useRecoilValue(percentageState)
    const text = useRecoilValue(imageTextState)

    return (
        <div className="canvas-parent">
            <div id="NodeToRender" className='canvas wiretap-bg center-text'>
                <Meter type="bar" value={percentage} thickness="xsmall" round={true} color="#4BB543" />
                <p style={{fontSize: "30px"}}>{text}</p>
                <span className="watermark">progressr.io</span>
            </div>
        </div>
    )
}