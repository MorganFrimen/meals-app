import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetalScreen from '../screens/MealDetalisScreen';

const MealsNavigator = createStackNavigator({
  Категории: CategoriesScreen,
  Продукты: {
    screen: CategoryMealsScreen,
  },
  Подробнее: MealsDetalScreen,
});

export default createAppContainer(MealsNavigator);
