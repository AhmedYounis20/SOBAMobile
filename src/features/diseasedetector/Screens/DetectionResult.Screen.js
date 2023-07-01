import { useEffect, useState } from "react";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { View, Image, Text } from "react-native";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";

const ResultText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
`;

export const DetectionResultScreen = ({ route }) => {
  const [result, setResult] = useState([[0.9, 0.1]]);
  const [isLoading, setIsLoading] = useState(true);
  const { uri } = route.params;
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      console.log(uri);
      setIsLoading(false);
    };
    load();
  }, []);
  return (
    <SafeArea>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignContent: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator
            animating={true}
            size={50}
            color="rgba(100,100,255,1)"
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              fontWeight: "bold",
              color: "rgba(100,100,255,1)",
              fontStyle: "italic",
            }}
          >
            Please wait for prediction...
          </Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              height: "70%",
              width: "70%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: uri }}
                style={{ flex: 1 }}
                resizeMode="contain"
              />
            </View>
          </View>
          <ResultText>Healthy : {Math.ceil(result[0][0] * 100)}%</ResultText>
          <ResultText>
            powdery mildew : {Math.floor(result[0][1] * 100)}%
          </ResultText>
        </View>
      )}
    </SafeArea>
  );
};
