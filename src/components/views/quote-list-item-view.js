import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const QuoteListItemView = (props) => {
  return <ListItem
    containerStyle={[styles.quote, { backgroundColor: props.backgroundColor }]}
    title={props.quote.text}
    titleStyle={styles.title}
    hideChevron={!props.showDeleteButton}
    underlayColor={'#3D6DFF'}
    onLongPress={props.onLongPress}
    onPress={props.onPress}
    rightIcon={{ name: 'delete', style: { marginRight: 10 } }}
    onPressRightIcon={props.onPressRightIcon}
  />;
}


const styles = StyleSheet.create({
  quote: {
    height: 100,
    padding: 10,
    borderBottomColor: '#000',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#000'
  }
});

export default QuoteListItemView;