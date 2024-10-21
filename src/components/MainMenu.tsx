import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';

const MainMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Menu</Button>}>
          <Menu.Item onPress={() => {}} title="Sign up " />
          <Menu.Item onPress={() => {}} title="Login" />
          <Divider />
          <Menu.Item onPress={() => {}} title="NA" />
        </Menu>
      </View>
    </PaperProvider>
  );
};



export default MainMenu;