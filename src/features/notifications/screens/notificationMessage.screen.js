import { useContext, useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import {
  Text,
  View,
  Alert,
  Modal,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export const NotificationMessage = () => {
  const [notification, setNotification] = useState({});
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const topic = "all";
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization stateus:", authStatus);
    }
  };

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => {
          console.log(token);
        });
      messaging()
        .subscribeToTopic(topic)
        .then(() => console.log("subscribe to topic:", topic))
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("failed token status ", authStatus);
    }
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      setNotification(remoteMessage.notification);
      setModalIsVisible(true);
    });
    return unsubscribe;
  }, []);

  const NotificationBox = new Animated.Value(-200);

  Animated.timing(NotificationBox, {
    toValue: 0,
    duration: 800,
    useNativeDriver: true,
  }).start();

  return (
    <>
      {modalIsVisible && (
        <Animated.View
          style={[
            {
              top: 0,
              width: "95%",

              borderRadius: 12,
              backgroundColor: "#b8d1d6",
              position: "absolute",
              zIndex: 10,
              alignSelf: "center",
            },
            {
              transform: [
                {
                  translateY: NotificationBox,
                },
              ],
            },
          ]}
        >
          <View
            style={{
              paddingTop: "3%",
              paddingLeft: "5%",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#326670",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                {notification.title}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#8e9e91",
                  marginLeft: "2%",
                }}
              >
                {notification.body}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{ alignItems: "center", marginTop: 30 }}
            onPress={() => setModalIsVisible(false)}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: "2%",
              }}
            >
              {" "}
              seen{" "}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </>
  );
};
