import type { GlobalThemeOverrides } from 'naive-ui'
export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'red',
    primaryColorHover: 'red',
  },
  Button: {
    textColor: 'yellow',
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: 'blue',
      },
    },
  },
}
