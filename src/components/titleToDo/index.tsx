import  {Text} from 'react-native';

import {Style }from './style';
import RocketSvg from '../../../assets/Rocket';

export const TitleToDo = ()=>{
return(
    <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 40,...Style.to }}><RocketSvg/> to<Text style={{ fontFamily: 'Inter_700Bold', fontSize: 40,...Style.do }}>do</Text></Text>
)
}