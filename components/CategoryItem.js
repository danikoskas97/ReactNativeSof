import React from 'react'
import { View, Text,TouchableOpacity , StyleSheet} from 'react-native'

export default function CategoryItem(props) {
    return (
        <TouchableOpacity onPress={props.onSelectItem}>
      <View style={styles.ShopItem}>
        <View style={{ ...styles.tripRow, ...styles.shopHeader }}>
          <Text>{props.title}</Text>
        </View>
        <View style={{ ...styles.shopRow, ...styles.shopDetail }}>
          <Text>Price: {props.price}</Text>
          <Text>Title: {props.title.toUpperCase()}</Text>

        </View>
      </View>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  ShopItem: {
      height: 200,
      width: "100%",
      backgroundColor: "#ccc",
      borderRadius: 10,
      overflow: "hidden",
    },
    shopRow: {
      flexDirection: "row",
    },
    shopHeader: {
      height: "85%",
    },
    shopDetail: {
      paddingHorizontal: 10,
      justifyContent: "space-between",
      alignItems: "center",
      height: "15%",
    },
  });
