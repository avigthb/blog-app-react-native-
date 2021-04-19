import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const homeScreen = ({ navigation }) => {
  const context = useContext(BlogContext);
  useEffect(() => {
    context.getblogs();
    const listener = navigation.addListener("didFocus", () => {
      context.getblogs();
    });
  }, []);
  return (
    <View>
      <View style={style.heading}>
        <Text style={{ fontSize: 30 }}>All blogs</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("create");
          }}
        >
          <Feather name="plus" size={30}></Feather>
        </TouchableOpacity>
      </View>
      <FlatList
        data={context.data}
        keyExtractor={(item) => {
          return item.title;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("blog", { content: item.content });
              }}
            >
              <View style={style.blogcontainer}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("edit", { id: item.id });
                  }}
                >
                  <Feather name="edit" size={30}></Feather>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    context.removeblogs(item.id);
                  }}
                >
                  <Feather name="trash" size={30}></Feather>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  blogcontainer: {
    height: 50,
    borderTopWidth: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default homeScreen;
