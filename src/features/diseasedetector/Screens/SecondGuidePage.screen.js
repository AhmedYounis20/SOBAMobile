import { View } from "react-native";
import {
  BulletDot,
  BulletText,
  BulletView,
  MainGuideButton,
  GuideButtonsView,
  TitleText,
  Background,
} from "../components/guide.styles";
import { ScreenView } from "../../../components/views/screenView.component";

export const DisDetectSecondPage = ({ navigation }) => {
  return (
    <ScreenView>
      <Background
        resizeMode="cover"
        source={require("../../../../assets/images/diseaseDetectionGuide/page1.png")}
      >
        <Background
          resizeMode="cover"
          source={require("../../../../assets/images/Black_frame.png")}
        >
          <View style={{ alignItems: "center", marginTop: "5%" }}>
            <TitleText>Here’s how to get started: </TitleText>
            <BulletView>
              <BulletDot>{`\u2022`}</BulletDot>
              <BulletText>
                Make sure you have a good quality camera on your phone. You'll
                need to take a clear picture of the affected plant to get an
                accurate diagnosis.
              </BulletText>
            </BulletView>
            <BulletView>
              <BulletDot>{`\u2022`}</BulletDot>
              <BulletText>
                Find a well-lit area to take the picture. Natural light is best,
                but if that's not possible, try using a bright lamp or
                flashlight to illuminate the plant.
              </BulletText>
            </BulletView>
            <BulletView>
              <BulletDot>{`\u2022`}</BulletDot>

              <BulletText>
                Position the camera so that the plant is in focus and takes up
                most of the frame. Make sure there are no obstructions or
                distractions in the background.
              </BulletText>
            </BulletView>
            <BulletView>
              <BulletDot>{`\u2022`}</BulletDot>

              <BulletText>
                Take multiple pictures from different angles to capture the full
                extent of the damage or symptoms.
              </BulletText>
            </BulletView>
            <BulletView>
              <BulletDot>{`\u2022`}</BulletDot>
              <BulletText>
                Once you have a clear picture, upload it to our app and our
                advanced algorithms will analyze it to identify any diseases or
                pests affecting your plant.
              </BulletText>
            </BulletView>
          </View>
          <GuideButtonsView>
            <MainGuideButton
              textColor="#FFFFFF"
              onPress={() => navigation.navigate("DiseaseDetection")}
            >
              Continue
            </MainGuideButton>
          </GuideButtonsView>
        </Background>
      </Background>
    </ScreenView>
  );
};
