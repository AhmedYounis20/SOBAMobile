import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import * as ImagePicker from "expo-image-picker";

export const DiseaseDetectionScreen = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <SafeArea
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View>
          <Text style={{ textAlign: "center" }}>
            We need your permission to show the camera
          </Text>
          <Button
            onPress={async () => {
              await requestPermission();
            }}
            title="grant permission"
          />
        </View>
      </SafeArea>
    );
  }
  const takePicture = async () => {
    if (cameraRef.current) {
      await requestPermission();
      const options = { quality: 1, base64: true };
      const result = await cameraRef.current.takePictureAsync(options);
      const { uri } = result;
      console.log(uri);
      navigation.navigate("DetectionResult", { img: result });
    }
  };
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });
    // await getPredictions(result.assets[0].uri);

    if (!result.canceled) {
      console.log(result.assets[0]);
      navigation.navigate("DetectionResult", { uri: result.assets[0] });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingTop: 40 }}>
      <View
        style={{
          height: "80%",
          borderRadius: 30,
          overflow: "hidden",
        }}
      >
        <Camera
          ref={cameraRef}
          style={{
            flex: 1,
            aspectRatio: 1,
          }}
          ratio={"1:1"}
          type={type}
          zoom={0.01}
        >
          {/* Your camera view */}
        </Camera>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          alignSelf: "center",
          alignItems: "center",
          flexDirection: "row",
          left: 15,
        }}
      >
        <View style={{ left: 30, paddingRight: 90, justifyContent: "center" }}>
          <TouchableOpacity onPress={pickImage}>
            <Icon
              iconType={IconTypes.Entypo}
              name="image"
              size={50}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={takePicture}
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "transparent",
            borderRadius: 70,
            height: 90,
            width: 90,
            borderWidth: 3,
            borderColor: "white",
          }}
        >
          <View
            style={{
              borderRadius: 50,
              backgroundColor: "white",
              alignSelf: "center",
              width: 80,
              height: 80,
              marginLeft: 1,
            }}
          />
        </TouchableOpacity>
        <View style={{ paddingLeft: 100, right: 40, justifyContent: "center" }}>
          <TouchableOpacity onPress={toggleCameraType}>
            <Icon
              iconType={IconTypes.Entypo}
              name="cycle"
              size={50}
              color={"rgba(255,255,255,0.7)"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// import { Text, View, TouchableOpacity } from "react-native";
// import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
// import { Card } from "react-native-paper";

// import styled from "styled-components";
// import { MaterialIcons } from "@expo/vector-icons";

// const AboutCard = styled(Card)`
//   height: 80px;
//   width: 95%;
//   margin: 2.5%;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   flex: 1;
//   padding-left: 10px;
// `;
// const AboutItemTitle = styled.Text`
//   font-size: 30px;
//   font-style: italic;
//   color: violet;
//   margin-left: 10px;
// `;
// export const DiseaseDetectionScreen = ({ navigation }) => {
//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       quality: 1,
//       base64: true,
//     });
//     //await getPredictions(result.assets[0].uri);

//     // if (!result.canceled) {
//     //   navigation.navigate("DetectionResult", { uri: result.assets[0].uri });
//     // }
//   };

//   return (
//     <SafeArea>
//       <ScrollView style={{ marginTop: 20 }}>
//         <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
//           <AboutCard>
//             <View style={{ flexDirection: "row" }}>
//               <MaterialIcons name="camera" size={50} color={"violet"} />
//               <AboutItemTitle>Take a photo</AboutItemTitle>
//             </View>
//           </AboutCard>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={pickImage}>
//           <AboutCard>
//             <View style={{ flexDirection: "row" }}>
//               <MaterialIcons name="image" size={50} color={"violet"} />
//               <AboutItemTitle>pick from gallery</AboutItemTitle>
//             </View>
//           </AboutCard>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeArea>
//   );
// };
