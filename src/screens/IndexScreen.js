import React, {useContext} from 'react';
import {Context /* as BlogContext (if we have second or more lines of contexts */} from "../context/BlogContext";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import {AntDesign} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return <View>
        <Text>IndexScreen</Text>
        <Button title='Add' onPress={addBlogPost}/>
        <FlatList data={state} renderItem={({item}) => {
            return <TouchableOpacity onPress={() => {
                navigation.navigate('Show', {id: item.id})
            }}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity onPress={() => {
                        deleteBlogPost(item.id)
                    }}>
                        <AntDesign style={styles.icon} name="delete"/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        }} keyExtractor={(item => item.title)}/>
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
