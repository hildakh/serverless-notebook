import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import "./LoaderButton.css";

export default function LoaderButton(props) {
  // props destructured to only use the isLoading prop passed from parent
  let { isLoading, ...otherProps } = props;
  return (
    <Button
    className={`LoaderButton ${props.className}`}
    disabled= {isLoading}
    // disabled={props.isLoading}
    // block= {props.block}
    // type= {props.type}
    // bsSize= {props.bsSize}
    // bsStyle= {props.bsStyle}
    // children={props.children}
    // onClick={props.onClick}
    {...otherProps}
    >
      {props.isLoading && <Glyphicon glyph="refresh" className="spinning" />}
      {props.children}
    </Button>
  )
}