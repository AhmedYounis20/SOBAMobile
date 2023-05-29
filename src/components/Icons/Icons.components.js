import {
  FontAwesome5,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
  Foundation,
  Ionicons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

 export const IconTypes={
    FontAwesome5:"FontAwesome5",
    AntDesign:"AntDesign",
    Entypo:"Entypo",
    EvilIcons:"EvilIcons",
    Feather:"Feather",
    FontAwesome:"FontAwesome",
    MaterialCommunityIcons:"MaterialCommunityIcons",
    MaterialIcons:"MaterialIcons",
    Fontisto:"Fontisto",
    Foundation:"Foundation",
    Ionicons:"Ionicons",
    Octicons:"Octicons",
    SimpleLineIcons:"SimpleLineIcons",
    Zocial:"Zocial"
 }

export const Icon = ({
  name = "activity",
  iconType = IconTypes.Feather,
  size = 20,
  color,
}) => {
  switch (iconType) {
    case IconTypes.FontAwesome5:
      return <FontAwesome5 name={name} size={size} color={color} />;
      break;
    case IconTypes.AntDesign:
      return <AntDesign name={name} size={size} color={color} />;
      break;
    case IconTypes.Entypo:
      return <Entypo name={name} size={size} color={color} />;
      break;
    case IconTypes.EvilIcons:
      return <EvilIcons name={name} size={size} color={color} />;
      break;
    case IconTypes.Feather:
      return <Feather name={name} size={size} color={color} />;
      break;
    case IconTypes.FontAwesome:
      return <FontAwesome name={name} size={size} color={color} />;
      break;
    case IconTypes.MaterialCommunityIcons:
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
      break;
    case IconTypes.MaterialIcons:
      return <MaterialIcons name={name} size={size} color={color} />;
      break;
    case IconTypes.Fontisto:
      return <Fontisto name={name} size={size} color={color} />;
      break;
    case IconTypes.Foundation:
      return <Foundation name={name} size={size} color={color} />;
      break;
    case IconTypes.Ionicons:
      return <Ionicons name={name} size={size} color={color} />;
      break;
    case IconTypes.Octicons:
      return <Octicons name={name} size={size} color={color} />;
      break;
    case IconTypes.SimpleLineIcons:
      return <SimpleLineIcons name={name} size={size} color={color} />;
      break;
    case IconTypes.Zocial:
      return <Zocial name={name} size={size} color={color} />;
      break;
    default:
      return <Feather name="activity" size={20} color={color} />;
  }
};
