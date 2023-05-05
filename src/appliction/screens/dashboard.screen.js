import styled from "styled-components";
import { React, useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "../../components/typography/text.component";
import { Card, Searchbar } from "react-native-paper";
import { SafeArea } from "../../components/SafeArea/SafeArea.Component";
import { Spacer } from "../../components/spacer/spacer.component";

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const SearchContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const AccountIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-top: ${(props) => props.theme.space[3]};
`;

const MidContainer = styled.View`
  flex: 1;
  background-color: blue;
`;

const SensorCard = styled(Card)`
  margin: ${(props) => props.theme.space[2]};
`;

const LocationContainer = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

const CurrentTemperature = styled.Text`
  padding: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const CardTop = styled.View``;

const CardBottom = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const SensorReadView = styled.View`
  flex: 1;
  margin: ${(props) => props.theme.space[2]};
`;

const BottomContainer = styled.View`
  flex: 1;
  background-color: gray;
`;

const SensorRead = ({ property = "Humidity", value = "30%" }) => {
  return (
    <>
      <Text variant="body">{property}</Text>
      <Text variant="label">{value}</Text>
    </>
  );
};

export const DashboardScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeArea>
      <TopContainer>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={(q) => setSearchQuery(q)}
            value={searchQuery}
          />
        </SearchContainer>
        <Spacer position="right" size="medium">
          <AccountIcon
            source={{
              uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            }}
          />
        </Spacer>
      </TopContainer>
      <MidContainer>
        <SensorCard>
          <CardTop>
            <LocationContainer>
              <Spacer position="right" size="small">
                <MaterialIcons name="location-pin" size={24} color="black" />
              </Spacer>
              <Text variant="body">As Santa</Text>
              <Spacer position="left" size="xl" />
              <MaterialCommunityIcons
                name="weather-pouring"
                size={24}
                color="black"
              />
            </LocationContainer>
            <CurrentTemperature>17°C</CurrentTemperature>
          </CardTop>
          <CardBottom>
            <SensorReadView>
              <SensorRead />
            </SensorReadView>
            <SensorReadView>
              <SensorRead property="Precipitation" value="5.1mL" />
            </SensorReadView>
            <SensorReadView>
              <SensorRead property="Pressure" value="450hPa" />
            </SensorReadView>
            <SensorReadView>
              <SensorRead property="Wind" value="23m/s" />
            </SensorReadView>
          </CardBottom>
        </SensorCard>
      </MidContainer>
      <BottomContainer />
    </SafeArea>
  );
};
