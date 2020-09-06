/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Dimensions,
} from 'react-native';

const DATA = generate(40);

function App() {
  console.log('Horizontal')
  return (
      <FlatList
        data={DATA}
        style={styles.appContainer}
        renderItem={subList}
        horizontal
        pagingEnabled
        initialNumToRender={1}
        windowSize={1}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
  );
};

const subList = (props) => {
  console.log('Vertical')
  return (
    <FlatList
      data={props.item}
      style={styles.flatRow}
      renderItem={renderItem}
      initialNumToRender={20}
      windowSize={2}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
    />
  );
};

function Line(props) {
  const {email, first_name} = props.item.item;
  return (
    <View style={styles.line}>
      <Text style={styles.textFont}>{first_name}</Text>
      <Text style={styles.subtitleFont}>{email}</Text>
    </View>
  );
}

const renderItem = (props) => <Line item={props} />;

function generate(val) {
  return new Array(val).fill().map((e, i) => {
    return data(i + 1);
  });
}

function data(page) {
  switch (page) {
    case 1:
      return require('./data/1.json');
    case 2:
      return require('./data/2.json');
    case 3:
      return require('./data/3.json');
    case 4:
      return require('./data/4.json');
    case 5:
      return require('./data/5.json');
    case 6:
      return require('./data/6.json');
    case 7:
      return require('./data/7.json');
    case 8:
      return require('./data/8.json');
    case 9:
      return require('./data/9.json');
    case 10:
      return require('./data/10.json');
    case 11:
      return require('./data/11.json');
    case 12:
      return require('./data/12.json');
    case 13:
      return require('./data/13.json');
    case 14:
      return require('./data/14.json');
    case 15:
      return require('./data/15.json');
    case 16:
      return require('./data/16.json');
    case 17:
      return require('./data/17.json');
    case 18:
      return require('./data/18.json');
    case 19:
      return require('./data/19.json');
    case 20:
      return require('./data/20.json');
    case 21:
      return require('./data/21.json');
    case 22:
      return require('./data/22.json');
    case 23:
      return require('./data/23.json');
    case 24:
      return require('./data/24.json');
    case 25:
      return require('./data/25.json');
    case 26:
      return require('./data/26.json');
    case 27:
      return require('./data/27.json');
    case 28:
      return require('./data/28.json');
    case 29:
      return require('./data/29.json');
    case 30:
      return require('./data/30.json');
    case 31:
      return require('./data/31.json');
    case 32:
      return require('./data/32.json');
    case 33:
      return require('./data/33.json');
    case 34:
      return require('./data/34.json');
    case 35:
      return require('./data/35.json');
    case 36:
      return require('./data/36.json');
    case 37:
      return require('./data/37.json');
    case 38:
      return require('./data/38.json');
    case 39:
      return require('./data/39.json');
    default:
      return require('./data/40.json');
  }
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    top: 60,
  },
  flatRow: {
    flex: 1,
  },
  textFont: {
    fontSize: 40,
  },
  subtitleFont: {
    fontSize: 20,
  },
  line: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    minHeight: 30,
  },
});

export default App;
