import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { CATEGORY, ITEMS } from "../data/Data";
import CategoryItem from "../components/CategoryItem";

const ListCategoryScreen = (props) => {
  const itemId = props.navigation.getParam("itemId");
  const selectedItem = ITEMS.find((item) => item.categoryId === itemId);

  const renderTripItem = (itemData) => {
    return (
      <CategoryItem
        title={itemData.item.title}
        onSelectItem={() => {
          props.navigation.navigate({
            routeName: "ItemScreen",
            params: {
              itemId: itemData.item.categoryId,
            },
          });
        }}
        categoryIds={itemData.item.categoryIds}
        price={itemData.item.price}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };

  const displayedItems = ITEMS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedItems}
        keyExtractor={(item, index) => item.id}
        renderItem={renderTripItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

ListCategoryScreen.navigationOptions = (navigationData) => {
  const ItemId = navigationData.navigation.getParam("ItemId");
  const selectedItem = ITEMS.find((item) => item.id === ItemId);

  return {
    headerTitle: selectedItem.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListCategoryScreen;
