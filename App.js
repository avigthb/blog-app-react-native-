import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import homeScreen from "./src/screens/homeScreen";
import { BlogProvider } from "./src/context/BlogContext";
import BlogScreen from "./src/screens/blogContent";
import CreateScreen from "./src/screens/CreateBlog";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    home: homeScreen,
    blog: BlogScreen,
    create: CreateScreen,
    edit: EditScreen,
  },
  {
    initialRouteName: "home",
    defaultNavigationOptions: {
      title: "Welcome to your blogs!",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
