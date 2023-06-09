import { View } from "react-native";
import { useTheme } from "styled-components";
import { AnimatePresence } from "framer-motion";

import { useAuth } from '../hooks/useAuth';
import { SignIn } from "../screens/SignIng";
import { Home } from '../screens/Home';

export function Routes() {
  const { user } = useAuth();
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.black, flex: 1}}>
      <AnimatePresence mode='wait'>
        { user.id ? <Home /> : <SignIn /> }
      </AnimatePresence>
    </View>
  )
}