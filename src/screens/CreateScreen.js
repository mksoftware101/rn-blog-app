import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import Separator from "../components/Separator";
import {Context} from "../context/BlogContext";

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return <View>
        <Text style={styles.title}>Enter Title:</Text>
        <Separator/>
        <TextInput style={styles.input} onChangeText={(text) => setTitle(text)} value={title} />
        <Separator height={16}/>
        <Text style={styles.content}>Enter Content:</Text>
        <Separator/>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        <Separator height={16}/>
        <Button style={styles.button} title='Save' onPress={() => {
            console.log('clicked save')
            addBlogPost(title, content, () => {
                navigation.navigate('Index');
            })
        }}/>
    </View>
}

const styles = StyleSheet.create({
    title: {
        marginStart: 16,
        marginTop: 16,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 12,
        marginStart: 16,
        marginEnd: 16,
    },
    content: {
        marginStart: 16,
        marginTop: 16,
    },
})

export default CreateScreen
