import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Tabs from "./Tabs";
import Test from "../screens/Tests/Test";


const Drawer = createDrawerNavigator();
const AppStack = () => {
    return (
        <Drawer.Navigator
            initialRouteName="DashBoard"

            screenOptions={{
                drawerLabelStyle: {
                    fontSize: 15,
                    color: "black"
                },
                drawerStyle: {
                    width: '70%',

                },
                drawerActiveTintColor: "#4425F50A",
            }}
            drawerContent={props => <CustomDrawer{...props} />}
        >

            <Drawer.Screen
                name='DashBoard'
                component={Tabs}
                options={{
                    drawerType: 'front',

                    title: "dashboard",
                    headerShown: false,


                }}
            />

            <Drawer.Screen
                name='Test'
                component={Test}
                options={{
                    drawerType: 'front',

                    title: "Test",
                    headerShown: false,


                }}
            />



        </Drawer.Navigator>
    )
}

export default AppStack