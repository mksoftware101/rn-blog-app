import React, {useContext} from 'react';
import {Context /* as BlogContext (if we have second or more lines of contexts */} from "../context/BlogContext";
import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {AntDesign} from '@expo/vector-icons';

const renderItem = ({item}) => {
    return <View style={styles.row}>
        <Text style={styles.title}>{item.title}</Text>
        <AntDesign style={styles.icon} name="delete"/>
    </View>
}

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)

    return <View>
        <Text>IndexScreen</Text>
        <Button title='Add' onPress={addBlogPost}/>
        <FlatList data={state} renderItem={renderItem} keyExtractor={(item => item.title)}/>
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
        color: "black",
    }
})

export default IndexScreen
