import React, { useState } from "react";
import {Button, Form, Row, Col, Container, Tooltip, OverlayTrigger } from "react-bootstrap";

const ShadowMain = ({
  horizontal,
  horizontalVal,
  verticalVal,
  vertical,
  blurVal,
  blur,
  sliderValue,
  handleSliderChange,
  InsetVal,
  insetCheck,
  setColor,
  Color,
  setBoxbg,
  Boxbg,
  rgbValue,
  copyCss,
  handleCopyClick,
  toolTip
}) => {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {toolTip}
    </Tooltip>
  );

 

  return (
    <>
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
                    value={horizontalVal}
                    onChange={(e) => horizontal(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Vertical</Form.Label>
                  <Form.Range
                    min={-50}
                    max={50}
                    value={verticalVal}
                    onChange={(e) => vertical(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Blur</Form.Label>
                  <Form.Range
                    value={blurVal}
                    onChange={(e) => blur(e.target.value)}
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
                    checked={InsetVal}
                    onChange={() => insetCheck(!InsetVal)}
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group className="mb-3">
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
                    <Form.Group className="mb-3">
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
                  boxShadow: `${
                    InsetVal ? "inset" : ""
                  } ${horizontalVal}px ${verticalVal}px ${blurVal}px ${rgbValue}`,
                  backgroundColor: `${Boxbg}`,
                }}
              >
                <h2 className="text-white text-center">{Boxbg}</h2>
              </div>
              

              <OverlayTrigger
                placement="right"
                delay={{ show: 100, hide: 400 }}
                overlay={renderTooltip}
              >
              <Button variant="link" className="copy_btn float-end" onClick={handleCopyClick}>
                  <img src="./copy.svg" />
                </Button>
                </OverlayTrigger>
              <h3 className="text-center" ref={copyCss}>
                {InsetVal ? (
                  <code>
                    box-shadow: {horizontalVal}px {verticalVal}px {blurVal}px {rgbValue} inset
                  </code>
                ) : (
                  <code>
                    box-shadow: {horizontalVal}px {verticalVal}px {blurVal}px {rgbValue}
                  </code>
                )}
              </h3>
             
            </Col>
          </Row>
        </div>
        <div className="text-center github">
          <a
            href="https://github.com/jatinsharma22/shadow-generator/tree/master"
            target="_blank"
          >
            <img src="./github.svg" alt="Github" />
          </a>
        </div>
      </Container>
    </>
  );
};

export default ShadowMain;
