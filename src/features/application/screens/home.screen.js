import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { apiGet } from "../../../services/apirequest/apirequest.service";

export const HomeScreen = () => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [data,setData] =useState(null); 
  useEffect(() => {
    
    apiGet()
        .then((res) =>res.text())
        .then((res) =>setData(res))
        .catch((err) => console.log(err));
    
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <ScrollView style={{maxHeight:100,margin:40}} horizontal showsHorizontalScrollIndicator={false}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {JSON.stringify(user)}
        </Text>
        <Spacer position={"top"} size="large" />
      </ScrollView>
      <View style={{ width: "40%", alignSelf: "center" }}>
        <Button title="logout" onPress={onLogout} />
      </View>
    </View>
  );
};
