import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { CATEGORY } from "../data/Data";
import Colors from "../constants/Colors";
export default function HomeScreen(props) {
  const renderGridItem = (itemData) => {
    return (
      <CategoryItem
        title={itemData.item.name}
        id={itemData.item.id}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ListCategoryScreen",
            params: {
              itemId: itemData.item.categoryIds,
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

HomeScreen.navigationOptions = {
  headerTitle: "Your Native Shop",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
