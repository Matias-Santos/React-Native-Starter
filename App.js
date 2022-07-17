import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ReducerSquareScreen from "./src/screens/ReducerSquareScreen";
import ReducerCounterScreen from "./src/screens/ReducerCounterScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import FlexBoxScreen from "./src/screens/FlexBoxScreen";
import PositionScreen from "./src/screens/PositionScreen";
import StylesExercise from "./src/screens/StylesExercise";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ComponentsScreen: ComponentsScreen,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorsScreen: ColorsScreen,
    SquareScreen: SquareScreen,
    ReducerSquareScreen: ReducerSquareScreen,
    ReducerCounterScreen: ReducerCounterScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen,
    FlexBoxScreen: FlexBoxScreen,
    PositionScreen: PositionScreen,
    StylesExercise: StylesExercise
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
 