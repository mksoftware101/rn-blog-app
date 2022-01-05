import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {Entypo} from "@expo/vector-icons";
import IndexScreen from "./IndexScreen";

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return <View>
        <Text>{blogPost.title}</Text>
    </View>
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Edit', { id: navigation.getParam('id') })
            }}>
                <Entypo name='pencil' size={30}/>
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({})

export default ShowScreen
