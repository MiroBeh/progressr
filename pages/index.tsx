import { useEffect, useState } from "react";

import html2canvas from "html2canvas";
import { Meter, Button, TextInput, TextArea, Box } from "grommet";

const download = (dataUrl: string) : void => {
  const link = document.createElement("a");
  link.download = "progess.png";
  link.href = dataUrl;
  link.click();
}

export default function Home() {
  const [maxValue, setMaxValue] = useState<number>(100);
  const [currentValue, setCurrentValue] = useState<number>(10);
  const [percentage, setPercentage] = useState<number>(60);
  const [text, setText] = useState<string>("Reach 1000 global uses");

  useEffect(() => {
    setPercentage((currentValue / maxValue) * 100);
  }, [maxValue, currentValue])

  const renderImage = () => {
    var node = document.getElementById("NodeToRender") as HTMLElement;

    html2canvas(node).then(canvas => {
      const dataUrl = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream")
      download(dataUrl);
    });
  }

  return (
    <div>
      <div className="header">
        <h1>progressr.io</h1>
      </div>

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
          value={text}
          onChange={event => setText(event.target.value)}
        />

        <Button size="medium" secondary onClick={renderImage} label="download"/>
      </div>
      

      <div className="canvas-parent">
        <div id="NodeToRender" className='canvas wiretap-bg center-text'>
          <Meter type="bar" value={percentage} thickness="xsmall" round={true} color="#4BB543" />
          <p style={{fontSize: "30px"}}>{text}</p>
          <span className="watermark">progressr.io</span>
        </div>
      </div>
    </div>
  )
}
