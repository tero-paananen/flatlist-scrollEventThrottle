/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';


function App(): React.JSX.Element {
  const array = Array.from({ length: 100 }, (_, i) => i);
  const flatListRef = useRef<FlatList<number>>(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
        gap: 100,
      }}
    >
      <View style={{ marginTop: 300, backgroundColor: 'blue', height: 50 }}>
        <FlatList
          data={array}
          ref={flatListRef}
          horizontal={true}
          scrollEventThrottle={32} // > 16 breaks onStartShouldSetResponder
          renderItem={({ item }) => (
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onStartShouldSetResponder={() => {
                // HERE tap received
                console.log('>>>>>>>>>>> onStartShouldSetResponder', item);
                return false;
              }}
              onStartShouldSetResponderCapture={() => false}
              onMoveShouldSetResponderCapture={() => false}
            >
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
      <Button
        title="Scroll to 50"
        onPress={() => {
          flatListRef.current?.scrollToIndex({
            index: 50,
            animated: true, // HERE is animated
          });
        }}
      />
    </View>
  );
}



export default App;
