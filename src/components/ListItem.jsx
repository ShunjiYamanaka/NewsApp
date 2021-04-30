import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { string, func } from "prop-types";

export default function ListItem(props) {
  const { imageUrl, title, author, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {!!imageUrl && (
        <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: imageUrl }}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text numberOfLines={3} style={styles.text}>
              {title}
            </Text>
            <Text style={styles.subText}>{author}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  imageUrl: string.isRequired,
  author: string.isRequired,
  title: string.isRequired,
  onPress: func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
