import React, {useContext, useEffect} from 'react';
import {Context /* as BlogContext (if we have second or more lines of contexts */} from "../context/BlogContext";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import {AntDesign, Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost, getBlogPosts} = useContext(Context)

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        })

        return () => {
            listener.remove();
        }
    }, []);

    return <View>
        <Text>IndexScreen</Text>
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

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Create')
            }}>
                <Feather name='plus' size={30}/>
            </TouchableOpacity>
        ),
    };
};

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
