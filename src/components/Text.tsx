import React from 'react'
import { x } from '@xstyled/styled-components'

const BaseText = x.div`
  font-size: 12px;
`

type Text = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface IText extends React.PropsWithChildren {
  text: Text
}

// TODO: make font-size variable with text prop
const Text = ({ children, text }: IText) => {
  return <BaseText text={text}>{children}</BaseText>
}

export default Text
