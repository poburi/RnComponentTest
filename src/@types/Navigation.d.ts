import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export type StackParamList ={
    Home: undefined;
    PopupUseModal: undefined;
}

export type DrawerParamList= {
    Home: undefined;
    Form: undefined;
}


export interface StackProps {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
    route: RouteProp<StackParamList, 'Home'>;
  }

export interface DrawerProps {
    navigation: DrawerNavigationProp<DrawerParamList, 'Home'>
    route: RouteProp<DrawerParamList, 'Home'>
}