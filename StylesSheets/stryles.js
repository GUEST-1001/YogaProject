import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63E0A3",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "center",
  },
  image: {
    flex: 5,
    width: "100%",
    resizeMode: "contain",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  Felx: {
    flex: 1,
  },


  scollViewContainer: {
    flex:1,
    backgroundColor: "#63E0A3",
    padding: "5%",
  },
  Button: {
    width: "100%",
    marginBottom: "3%",
  },
  ButtonContainer: {
    height: 120,
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 20,
  },
  Thumbnail: {
    flex: 4,
    alignItems: "end",
    resizeMode: "contain",
  },
  dataContent: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "center",
    marginStart: 20,
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },


  infoContainer: {
    flex: 1,
    backgroundColor: "#63E0A3",
    padding: "5%",
  },
  desConrainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  infoImage: {
    height: "40%",
    resizeMode: "contain",
  },
  infoNameCon: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  infoText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  infoDes: {
    fontSize: 13,
    marginTop: 5,
  },

  searchBar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  searchInput: {
    width: '80%',
    padding: 5,
    height: 30,
    borderWidth: 2,
    borderColor: '#000',
    fontSize: 13,
    borderRadius: 30,
  },
});

export default styles;
