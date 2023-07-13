import React, { useContext, useEffect, useState } from "react";
import { TextInput, View, Text, ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";

import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

export const ItemsCenter = styled.View`
  align-items: center;
`;

export const Background = styled.View`
  height: 8%;
  width: 100 %;
  top: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  justify-content: center;
`;
export const HarvestTitle = styled.Text`
font-family : ${(props) => props.theme.fonts.title}
font-size: ${(props) => props.theme.fontSizes.title};
color: ${(props) => props.theme.colors.text.white};
margin-left:8 %
`;

export const FormBox = styled.View`
  position: absolute;
  width: 95%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  z-index: 5;
  border-radius: 25px;
  align-self: center;
  top: 30 %;
`;

export const FieldContainer = styled.View`
  padding-vertical: 2 %;
`;

export const FieldTextContainer = styled.View`
  align-items: center;
  margin-left: 5 %;
  padding-bottom: 4 %;
  flex-direction: row;
`;
export const InputLabel = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-right: 1 %;
  color: ${(props) => props.theme.colors.text.disabled};
`;

export const InputFieldContainer = styled.View`
  width: 90 %;
  background-color: ${(props) => props.theme.colors.bg.inverse2};
  border-radius: 10px;
  align-self: center;
`;

export const SaveContainer = styled.TouchableOpacity`
  padding: 2.5%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  width: 90%;
  align-self: center;
  border-radius: 25px;
  align-items: center;
`;
export const AddContainer = styled(SaveContainer)`
  width: 95%;
  margin-bottom: 25%;
  margin-top: 2%;
`;

export const CropText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const StatisticsScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [harvest, setHarvest] = useState({
    apple: {
      amount: [500, 600, 550, 650],
      month: ["mar", "apr", "aug", "oct"],
    },
    orange: {
      amount: [500, 600, 550, 650, 700],
      month: ["mar", "apr", "aug", "oct", "nov"],
    },
    bannana: {
      amount: [500, 600, 700],
      month: ["mar", , "oct", "nov"],
    },
    tomatoes: {
      amount: [100, 200, 250, 350, 300],
      month: ["mar", "apr", "aug", "oct", "nov"],
    },
  });
  const [cropTypes, setCropTypes] = useState([
    "apple",
    "orange",
    "bannana",
    "tomatoes",
  ]);
  const [isAdd, setIsAdd] = useState(false);
  const [month, setMonth] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const OnAdd = () => {
    setIsAdd(!isAdd);
  };
  const OnSave = () => {
    if (name && harvest[name]) {
      amountNumber = Number(amount);
      harvest[name]["amount"].push(amountNumber);
      if (!harvest[name]["month"].includes(month)) {
        harvest[name]["month"].push(month);
      }
    } else if (name) {
      harvest[name] = {};
      harvest[name]["month"] = [];
      harvest[name]["amount"] = [];
      amountNumber = Number(amount);
      harvest[name]["amount"].push(amountNumber);
      if (!harvest[name]["month"].includes(month)) {
        harvest[name]["month"].push(month);
      }
    }

    console.log(harvest);
    const types = Object.keys(harvest);
    setCropTypes(types);
    setCropTypes(types);

    setIsAdd(!isAdd);
  };

  return (
    <View>
      <Background>
        <HarvestTitle>Harvest</HarvestTitle>
      </Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cropTypes &&
          cropTypes.map((crop, index) => (
            <View key={index}>
              <View style={{ marginVertical: "1.5%", alignItems: "center" }}>
                <CropText>{crop}</CropText>
              </View>
              <View style={{ alignSelf: "center" }}>
                <LineChart
                  data={{
                    labels: harvest[crop]["month"],
                    datasets: [
                      {
                        data: harvest[crop]["amount"],
                      },
                    ],
                  }}
                  width={Dimensions.get("window").width - 10} // from react-native
                  height={200}
                  yAxisLabel=""
                  yAxisSuffix="ْkg"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundGradientFrom: theme.colors.bg.secondary,
                    backgroundGradientTo: theme.colors.bg.secondary,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(120, 120, 120, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(120, 120, 120, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffa726",
                    },
                    propsForLabels: {
                      transform: [{ rotate: "-45deg" }], // Rotate the labels by -45 degrees
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              </View>
            </View>
          ))}
        {!isAdd && (
          <AddContainer onPress={OnAdd}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Add</Text>
          </AddContainer>
        )}
      </ScrollView>
      {/* <View
        style={{
          marginBottom: "10%",
          alignSelf: "center",
          width: "100%",
        }}
      > */}

      {/* </View> */}
      {isAdd && (
        <FormBox>
          <FieldContainer>
            <FieldTextContainer>
              <InputLabel> Harvest Month</InputLabel>
            </FieldTextContainer>

            <InputFieldContainer>
              <TextInput
                onChangeText={(input) => setMonth(input)}
                placeholder="Month"
                style={{
                  height: 20,
                  margin: 12,
                  borderWidth: 1,
                  borderColor: "transparent",
                  color: "black",
                }}
              />
            </InputFieldContainer>
          </FieldContainer>
          <FieldContainer>
            <FieldTextContainer>
              <InputLabel> Crop Name</InputLabel>
            </FieldTextContainer>

            <InputFieldContainer>
              <TextInput
                onChangeText={(input) => setName(input)}
                placeholder="crop name"
                style={{
                  height: 20,
                  margin: 12,
                  borderWidth: 1,
                  borderColor: "transparent",
                  color: "black",
                }}
              />
            </InputFieldContainer>
          </FieldContainer>
          <FieldContainer>
            <FieldTextContainer>
              <InputLabel> Amount</InputLabel>
            </FieldTextContainer>

            <InputFieldContainer>
              <TextInput
                onChangeText={(input) => setAmount(input)}
                placeholder="Amount"
                style={{
                  height: 20,
                  margin: 12,
                  borderWidth: 1,
                  borderColor: "transparent",
                  color: "black",
                }}
              />
            </InputFieldContainer>
          </FieldContainer>
          <FieldContainer>
            <SaveContainer onPress={OnSave}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>Save</Text>
            </SaveContainer>
          </FieldContainer>
        </FormBox>
      )}
    </View>
  );
};
