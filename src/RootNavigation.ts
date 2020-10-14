import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

export const NavigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: StackNavigationOptions) {
  if (NavigationRef.current) {
    NavigationRef.current.navigate(name, params);
  }
}
