import 'styled-components'
import '@xstyled/styled-components'
import {
  ITheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'

interface AppTheme extends ITheme, XStyledDefaultTheme {
  colors: {
    button: {
      primary: string
      secondary: string
      tertiary: string
      ghost: string
    }
  }
}

declare module '@Xstyled/system' {
  export interface Theme extends AppTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
