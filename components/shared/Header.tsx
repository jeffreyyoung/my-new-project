import * as React from 'react';
import { Text } from 'react-native';


export function Header({children}) {
  return <Text style={{fontSize: 35, fontWeight: 'bold', marginTop: 25}}>{children}</Text>
}
