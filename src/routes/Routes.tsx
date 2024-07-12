import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import HomePage from '../view/homePage/HomePage';
 const Stack = createNativeStackNavigator();
const Routes = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='homePage' component={HomePage}   options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )    

}
export default Routes