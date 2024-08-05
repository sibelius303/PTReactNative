import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { testData } from '../../tools/data';

export const SelectComponent = ({placheholder}) => {
  const [selected, setSelected] = useState("");
  const data = testData
  
  return(
    <SelectList
        setSelected={(val) => setSelected(val)} 
        data={data}
        save="key"
        onSelect={()=>console.log(selected)}
        arrowicon={<EvilIcons name="search" size={24} color="black" />}
        dropdownStyles={{marginTop:0, width:'100%', top:45, backgroundColor:'#F8F8F8',
          borderTopLeftRadius:2, borderTopRightRadius:2, position:'relative', top:0, zIndex:1,
        }}
        dropdownItemStyles={{backgroundColor:'#F8F8F8'}}
        inputStyles={{padding:2}}
        boxStyles={{ alignItems:'center', padding:8}}
        dropdownTextStyles={{color:'gray'}}
        placeholder={placheholder}
        disabledItemStyles={{backgroundColor:'#6078b8'}}
        disabledTextStyles={{color:'white'}}
        searchPlaceholder="Escribe..."
    />
  )

};