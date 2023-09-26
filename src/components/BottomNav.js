import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Ion from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../views/Home/Home';
import Prelevement from '../views/Prelevement';
import History from '../views/History';
import Profile from '../views/Profile';

function MyComponent() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Acceuil', icon: 'musical-notes-outline' },
    { key: 'prelevement', title: 'Prelevement', icon: 'ios-search-outline' },
    { key: 'history', title: 'Historique', icon: 'heart' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    prelevement: HomeScreen,
    history: HomeScreen,
  });

  return (
    <BottomNavigation
    sceneAnimationEnabled={true}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#fff' }}
      activeColor='#41B94D'
      renderIcon={({ route, focused, color, }) => <Ion name={route.icon} 
        color={ !focused ? '#05180577' : '#41B94D'} size={24}/>}
    />
  );
};

export default MyComponent;