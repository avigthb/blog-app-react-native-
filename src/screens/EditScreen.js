import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const context = useContext(BlogContext);
  const blog = context.data.find((item) => {
    return item.id == id;
  });
  const [title, settitle] = useState(blog.title);
  const [content, setcontent] = useState(blog.content);
  return (
    <View style={style.container}>
      <Text style={style.heading}> Add title</Text>
      <TextInput
        value={title}
        style={style.input}
        onChangeText={(text) => {
          settitle(text);
        }}
      ></TextInput>
      <Text style={style.heading}>Add content</Text>
      <TextInput
        value={content}
        style={style.input}
        onChangeText={(text) => {
          setcontent(text);
        }}
      ></TextInput>
      <Button
        title="Update Blog"
        onPress={() => {
          blog["title"] = title;
          blog["content"] = content;
          context.updateblog(id, blog);
          navigation.navigate("home");
        }}
      ></Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  heading: {},
  input: {
    height: 100,
    borderWidth: 5,
    borderColor: "gray",
  },
});

export default EditScreen;
