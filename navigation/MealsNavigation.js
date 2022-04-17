import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealsDetalScreen from '../screens/MealDetalisScreen'

const screens = {
    Home: {
        screen: CategoriesScreen
    }
}

// const MealsNavigator = createStackNavigator({
//     Category: CategoriesScreen,
//     CategoryMeals: {
//         screen: CategoryMealsScreen
//     },
//     MealsDetal: MealsDetalScreen
// })

// export default createAppContainer(MealsNavigator)

const MealsNavigator = createStackNavigator(screens)
export default createAppContainer(MealsNavigator)