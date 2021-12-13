import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import { Context /* as BlogContext (if we have second or more lines of contexts */ } from "../context/BlogContext";

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)

    return <View>
        <Text>IndexScreen</Text>
        <Button title='Add' onPress={addBlogPost}/>
        <FlatList data={state} renderItem={({item}) => {
            return <Text>{item.title}</Text>
        }} keyExtractor={(item => item.title)}/>
    </View>
}

const styles = StyleSheet.create({})

export default IndexScreen
