import { React, useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {

    const [Hor, setHor] = useState(10);
    const [Var, setVar] = useState(10);
    const [sliderValue, setSliderValue] = useState(0.5);
    const [Blur, setBlur] = useState(10);
    const [Color, setColor] = useState("#000");
    const [Boxbg, setBoxbg] = useState("#3668ab");
    const [Inset, setInset] = useState(false); 
  
    const handleSliderChange = (event) => {
      const value = parseFloat(event.target.value);
      setSliderValue(value);
    };
  
      // Function to convert hex to RGB
      const hexToRgb = (hex) => {
        // Remove the hash sign if it exists
        hex = hex.replace(/^#/, '');
    
        // Convert to RGB
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        const a = sliderValue;
    
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      };
    
      // Get RGB value from selected color
      const rgbValue = hexToRgb(Color);
  
    console.log(rgbValue)
  
    return (
      <Container>
        <h1>Shadow Generator</h1>
        <div className="main">
          <Row className="align-items-center gx-5">
            <Col md={5}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Horizontal</Form.Label>
                  <Form.Range
                    min={-100}
                    max={100}
                    value={Hor}
                    onChange={(e) => setHor(e.target.value)}
                  />
                </Form.Group>
      
                <Form.Group className="mb-3">
                  <Form.Label>Vertical</Form.Label>
                  <Form.Range
                    min={-50}
                    max={50}
                    value={Var}
                    onChange={(e) => setVar(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Blur</Form.Label>
                  <Form.Range
                    value={Blur}
                    onChange={(e) => setBlur(e.target.value)}
                  />
                </Form.Group>
      
                <Form.Group className="mb-3">
                  <Form.Label>Opacity</Form.Label>
                  <Form.Range
                    min={0}
                    max={1}
                    step={0.01}
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Inner Shadow</Form.Label>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Inset"
                    checked={Inset}
                    onChange={()=> setInset(!Inset)}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                    >
                      <Form.Label htmlFor="exampleColorInput">
                        Change Shadow Color
                      </Form.Label>
                      <Form.Control
                        type="color"
                        id="exampleColorInput"
                        defaultValue={Color}
                        title="Choose your color"
                        onChange={(e) => setColor(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                    >
                      <Form.Label htmlFor="exampleColorInput">
                        Change Background Color
                      </Form.Label>
                      <Form.Control
                        type="color"
                        id="exampleColorInput"
                        defaultValue={Boxbg}
                        title="Choose your color"
                        onChange={(e) => setBoxbg(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
            
            <Col md={7} className="ps-5">
              <div
                className="box p-5 mb-5 rounded"
                style={{
                  boxShadow: `${Inset ? "inset": "" } ${Hor}px ${Var}px ${Blur}px ${rgbValue}`,
                  backgroundColor: `${Boxbg}`,
                }}
              >
                <h2 className="text-white text-center">{Boxbg}</h2>
              </div>
      
              <h3 className="text-center">
                {
                Inset ? 
                <code>box-shadow: {Hor}px {Var}px {Blur}px {rgbValue} inset</code>  :
                <code>box-shadow: {Hor}px {Var}px {Blur}px {rgbValue}</code>
              }
                
              </h3>
            </Col>
          </Row>
        </div>
        <div className="text-center github">
          <a href="">
            <img src="./github.svg" alt="Github" />
          </a>
        </div>
      </Container>
  );
}

export default App;
