import {View,StyleSheet} from "react-native"
export const HairLine=()=><View
style={{
  borderBottomColor: (props)=>props.theme.colors.text.info,
  borderBottomWidth: StyleSheet.hairlineWidth,
  width: "90%",
  alignSelf: "center",
  marginBottom:10
}}
/>;