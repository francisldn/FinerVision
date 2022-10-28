import React from 'react'
import { NavigateButtonStyle, Span } from './NavigateButton.styles';


export default function NavigateButton() {
  return (
    <NavigateButtonStyle type="submit" >
      <p>Next <Span>&rsaquo;</Span></p>
    </NavigateButtonStyle>
  )
}