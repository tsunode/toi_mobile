import {createIconSet} from 'react-native-vector-icons';

const glyphMap = {
  "trash": 59652,
  "received": 59653,
  "sended": 59655,
  "profile": 59654,
  "search": 59648,
  "save": 59650,
  "resend": 59651,
  "send": 59649
};

const iconSet = createIconSet(glyphMap, 'icontoi', 'icontoi.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;