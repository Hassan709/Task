import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Card, Image, Header } from 'react-native-elements';
import Eggs from 'react-native-vector-icons/FontAwesome5';
import Fastdeliveryicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dessertsicon from 'react-native-vector-icons/Entypo';
import Drinkicon from 'react-native-vector-icons/Entypo';
const renderSeparator = () => (
  <View
    style={{
      backgroundColor: 'black',
      height: 0.5,
    }}
  />
);
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [
        'Fast Foods',
        'Deserts',
        'Drinks',
        'Dasi Foods',
        'Fast Foods',
        'Deserts',
        'Drinks',
        'Dasi Foods',
      ],
    };

  }
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Header
          containerStyle={{
            backgroundColor: '#8548BF',
          }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Store', style: { color: '#fff' } }}
          rightComponent={<Dessertsicon name='camera' size={25} color={"#fff"} onPress={() => this.props.navigation.navigate("Pick")} />} />
        <View style={styles.container}>
          {/*This is header text         */}
          <View style={styles.headertext}>
            <Text style={{ marginLeft: 25, fontWeight: 'normal', fontSize: 18 }}>
              All Category
            </Text>
            <Text style={{ marginRight: 25 }}>Whats's New</Text>
          </View>
          {/*This is icons        */}
          <View style={styles.iconrow}>
            <View>
              {/*   First icon start                      */}
              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  padding: 10,
                  borderRadius: 100,
                }}>
                <Eggs name="egg" size={30} color="#8548BF" />

              </View>
              <Text style={{ textAlign: 'center', marginTop: 2 }}>Eggs</Text>
              {/*   First icon end                      */}
            </View>
            <View>
              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  padding: 10,
                  borderRadius: 100,
                }}>
                <Fastdeliveryicon
                  name="truck-delivery"
                  size={30}
                  color="#8548BF"
                />
              </View>
              <Text style={{ textAlign: 'center', marginTop: 2 }}>Meat</Text>
            </View>

            <View>
              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  padding: 10,
                  borderRadius: 100,
                }}>
                <Dessertsicon name="cake" size={30} color="#8548BF" />
              </View>
              <Text style={{ textAlign: 'center', marginTop: 2 }}>Vegitable</Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  padding: 10,
                  borderRadius: 100,
                }}>
                <Drinkicon name="drink" size={30} color="#8548BF" />
              </View>
              <Text style={{ textAlign: 'center', marginTop: 2 }}>Ghee</Text>
            </View>
          </View>

          {/*     horizenatal view of food                       */}

          <View>
            <Text
              style={{
                marginTop: 25,
                fontWeight: 'bold',
                marginLeft: 25,
                fontSize: 18,
              }}>
              Feature Products
            </Text>
            <FlatList
              data={this.state.data1}
              horizontal
              showsHorizontalScrollIndicator={false}

              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={renderSeparator}
              renderItem={({ item, index }) => {
                return (
                  <Card containerStyle={{ padding: 0, height: 160, width: 100, marginBottom: 10 }} >
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: "row"
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          borderRadius: 1,
                          borderWidth: 1,
                          fontWeight: 'bold',
                          margin: 10,
                          backgroundColor: "#8548BF",
                          color: "white"
                        }}>
                        100 G
                    </Text>
                      <Drinkicon style={{ marginLeft: 20 }} name="heart" size={20} color="#8548BF"
                      />
                    </View>
                    <View style={{ alignSelf: "center" }}>
                      <Image
                        source={require('../images/ginger.jpeg')}
                        style={{ width: 70, height: 70 }}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "grey"
                      }}>
                      Ginger
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "black"
                      }}>
                      Rs.30.00
                    </Text>
                  </Card>

                );
              }}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 25,
                fontWeight: 'bold',
                marginLeft: 25,
                fontSize: 18,
              }}>
              Feature Products
            </Text>
            <FlatList
              data={this.state.data1}
              horizontal
              showsHorizontalScrollIndicator={false}

              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={renderSeparator}
              renderItem={({ item, index }) => {
                return (
                  <Card containerStyle={{ padding: 0, height: 160, width: 100, marginBottom: 10 }} >
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: "row"
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          borderRadius: 1,
                          borderWidth: 1,
                          fontWeight: 'bold',
                          margin: 10,
                          backgroundColor: "#8548BF",
                          color: "white"
                        }}>
                        100 G
                    </Text>
                      <Drinkicon style={{ marginLeft: 20 }} name="heart" size={20} color="#8548BF"
                      />
                    </View>
                    <View style={{ alignSelf: "center" }}>
                      <Image
                        source={require('../images/ginger.jpeg')}
                        style={{ width: 70, height: 70 }}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "grey"
                      }}>
                      Ginger
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "black"
                      }}>
                      Rs.30.00
                    </Text>
                  </Card>

                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
  },
  headertext: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconrow: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 25,
    marginLeft: 25,
  },
});
export default Home;
