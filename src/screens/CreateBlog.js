import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = ({ navigation }) => {
  const context = useContext(BlogContext);
  const newblog = {};
  return (
    <View style={style.container}>
      <Text style={style.heading}> Add title</Text>
      <TextInput
        style={style.input}
        onChangeText={(text) => {
          newblog["title"] = text;
        }}
      ></TextInput>
      <Text style={style.heading}>Add content</Text>
      <TextInput
        style={style.input}
        onChangeText={(text) => {
          newblog["content"] = text;
        }}
      ></TextInput>
      <Button
        title="Create Blog"
        onPress={() => {
          context.addblogs(newblog);
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
  heading: {
    fontSize: 20,
  },
  input: {
    height: 100,
    marginHorizontal: 0,
    borderWidth: 5,
    borderColor: "gray",
  },
});

export default CreateBlog;
