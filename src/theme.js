import { Platform } from 'react-native'

const platformFont =
  Platform.select({
    ios: 'Arial',
    android: 'Roboto',
  }) || 'System'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    primaryFg: '#fff',
    border: '#efefef',
    appBar: '#24292e',
    appBarFg: '#fff',
    cardFg: '#fff',
    danger: '#ab0000',
  },
  fontSizes: {
    caption: 12,
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: platformFont ?? 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
}

export default theme
