import * as React from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Email from 'react-native-vector-icons/Fontisto';

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#8548BF", alignItems: "center" }}>
            <Text style={{ marginTop: 20,textAlign: 'center', heigh: "100%", width: "80%", color: "white",fontSize:20 }}>Sign In</Text>

            <View style={{
                marginTop: 50, heigh: "100%", width: "90%", borderBottomLeftRadius: 100,
                backgroundColor: "white",
                borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20
            }}>
                <Text style={{ marginTop: 10, marginLeft: 10, alignItems: 'center', heigh: "100%", width: "80%", justifyContent: 'center', Color: "black" }}>Email</Text>
                <Input
                    containerStyle={{ marginLeft: 10 }}
                    leftIcon={
                        <Email
                            name='email'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Text style={{ marginLeft: 10, alignItems: 'center', heigh: "100%", width: "80%", justifyContent: 'center', Color: "black" }}>Password</Text>
                <Input
                    containerStyle={{ marginLeft: 10 }}
                    leftIcon={
                        <Icon
                            name='key'
                            size={24}
                            color='black'
                        />
                    }
                />
                <View style={{ alignItems: "flex-end", marginTop: -1 }}>
                    <Text style={{ Color: "black", fontSize: 15, marginRight: 10 }}>Forget Password ?</Text>
                </View>
                <View style={{ alignItems: "flex-end", marginTop: 50, marginBottom: 10, marginRight: 10 }}>
                    <Button
                        buttonStyle={{ height: 50, width: 50, borderRadius: 50 }}
                        onPress={() => navigation.navigate('Home')}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                    />
                </View>
            </View>
        </View>
    );
}
export default Login;