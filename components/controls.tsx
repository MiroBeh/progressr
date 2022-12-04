import { Button, TextInput, TextArea, Box } from "grommet";
import html2canvas from "html2canvas";
import { useRecoilState } from "recoil";

import { currentValueState, imageTextState, maxValueState } from "../utils/recoil-states";

const download = (dataUrl: string) : void => {
    const link = document.createElement("a");
    link.download = "progess.png";
    link.href = dataUrl;
    link.click();
}

export const Controls = () => {
    const [imageText, setImageText] = useRecoilState<string>(imageTextState);
    const [maxValue, setMaxValue] = useRecoilState<number>(maxValueState);
    const [currentValue, setCurrentValue] = useRecoilState<number>(currentValueState);

    const renderImage = () => {
        var node = document.getElementById("NodeToRender") as HTMLElement;
    
        html2canvas(node).then(canvas => {
          const dataUrl = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream")
          download(dataUrl);
        });
    }
    
    return (
        <div className="controls">
            <div className="value-inputs">
            <Box width="small">
                <TextInput
                type="number"
                value={currentValue}
                onChange={event => setCurrentValue(+event.target.value)}
                />
            </Box>
            <p><b>of</b></p>
            <Box width="small">
                <TextInput
                type="number"
                value={maxValue}
                onChange={event => setMaxValue(+event.target.value)}
                />
            </Box>    
            </div>


            <TextArea
            placeholder="type your goal!"
            value={imageText}
            onChange={event => setImageText(event.target.value)}
            />

            <Button size="medium" secondary onClick={renderImage} label="download"/>
        </div>
    )
}