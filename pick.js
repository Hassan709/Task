import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Header, Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Email from 'react-native-vector-icons/Fontisto';
function Pick() {
  const [count, setCount] = useState("");
  return (
    <View>
      <Header
        containerStyle={{
          backgroundColor: '#8548BF',
        }}
        centerComponent={{ text: 'Upload picture', style: { color: '#fff', fontSize: 20 } }}
      />
      <View style={{ height: 200,borderRadius:10,borderWidth:2, marginTop: 50, width: 172, alignSelf: "center", alignItems: 'center', borderWidth: 1, justifyContent: 'center', backgroundColor: "grey" }}>
        <Image
          style={{ height: 200, width: 172 }}
          source={{
            uri: count,
          }} />
        {/* <Text>{count}</Text> */}
      </View>
      <View style={{ bottom: -100, position: 'absolute', alignSelf: "center", flexDirection: "row" }}>
        <Button
          icon={
            <Icon
              name="camera"
              size={20}
              color="white"
            />
          }
          onPress={() => {
            ImagePicker.showImagePicker((response) => {

              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                setCount(response.uri);

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
              }
            });
          }}
          title="Pick Image"
          titleStyle={{ marginLeft: 10 }}
          buttonStyle={{
            height: 60, margin: 1, width: 150, alignSelf: "center", backgroundColor: "#8548BF"
          }}
        />
        <Button
          title="Camera Roll"
          titleStyle={{ marginLeft: 10 }}
          onPress={() => {
            ImagePicker.showImagePicker((response) => {

              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                setCount(response.uri);

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
              }
            });
          }}
          buttonStyle={{
            height: 60, width: 150, alignSelf: "center", backgroundColor: "#8548BF"
          }}
        />
      </View>
    </View>

  );
}
export default Pick;