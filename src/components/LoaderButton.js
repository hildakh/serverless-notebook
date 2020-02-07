import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import "./LoaderButton.css";

export default function LoaderButton(props) {
  let className="";
  return (
    <Button
    className={`LoaderButton ${className}`}
    disabled={props.disabled || props.isLoading}
    {...props}
    >
      {props.isLoading && <Glyphicon glyph="refresh" className="spinning" />}
      {props.children}
    </Button>
  )
}