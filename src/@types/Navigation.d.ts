import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList ={
    Home: undefined;
    PopupUseModal: undefined;
}


export interface StackProps {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
    route: RouteProp<StackParamList, 'Home'>;
  }