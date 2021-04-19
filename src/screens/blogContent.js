import React from "react";
import { View, Text } from "react-native";

const BlogContent = ({ navigation }) => {
  const content = navigation.getParam("content");
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

export default BlogContent;
