import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import EventDetails from './EventDetails';
import ProfileScreen from './ProfileScreen';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="EventDetails" component={EventDetails} options={{ title: 'Detalhes do Evento' }} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Meu Perfil' }} />
      <Drawer.Screen
        name="Logout"
        options={{
          title: 'Sair',
          headerShown: false,
          drawerItemStyle: { height: 50 },
        }}
      >
        {() => {
          handleLogout();
          return null;
        }}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
