import { Image, StyleSheet, View } from 'react-native'

import Text from '../components/Text'
import theme from '../theme'
import { formatNumber } from '../util'
import Badge from './Badge'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.cardFg,
  },
  avatar: {
    borderRadius: 4,
    width: 48,
    height: 48,
  },
  overview: {
    flexDirection: 'row',
    gap: 12,
  },
  overviewMeta: {
    gap: 8,
    flex: 1,
  },
  metaContainer: {
    paddingTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  description: {
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  metaItem: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2,
  },
})

const MetaItem = props => {
  return (
    <View style={styles.metaItem}>
      <Text fontWeight="bold">{props.content}</Text>
      <Text>{props.description}</Text>
    </View>
  )
}

const RepositoryItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.overview}>
        <Image source={{ uri: props.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.overviewMeta}>
          <Text fontWeight="bold">{props.fullName}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <Badge text={props.language} />
        </View>
      </View>
      <View style={styles.metaContainer}>
        <MetaItem
          content={formatNumber(props.stargazersCount)}
          description="Stars"
        />
        <MetaItem
          content={formatNumber(props.forksCount)}
          description="Forks"
        />
        <MetaItem content={props.reviewCount} description="Reviews" />
        <MetaItem content={props.ratingAverage} description="Rating" />
      </View>
    </View>
  )
}

export default RepositoryItem
