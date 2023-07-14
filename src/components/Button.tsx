import React from 'react'
import { x } from '@xstyled/styled-components'

const BaseButton = x.button`
    border-radius: 0;
    background-color: button.primary;
`

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost'
}

const Button = (props: ButtonProps) => {
  return <BaseButton {...props} />
}

export default Button
