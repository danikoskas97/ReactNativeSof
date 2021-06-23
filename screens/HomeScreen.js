import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { CATEGORY } from "../data/Data";
import Color from "../constants/Color";
export default function HomeScreen(props) {
  const renderGridItem = (itemData) => {
    return (
      <CategoryItem
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ListCategoryScreen",
            params: {
              CategoryItemId: itemData.item.id,
            },
          });
        }}
      ></CategoryItem>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORY}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

HomeScreen.navigationOption = {
  headerTitle: "Home Screens",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
