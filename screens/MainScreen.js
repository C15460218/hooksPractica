import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { Button, FlatList, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useEffect } from 'react/cjs/react.development';



const renderItem = function({ item }) {
    return (
        <View>
            <Text style={{fontSize: 25, fontWeight: '700'}}> {item.nombre} </Text>
            <Text>
                Edad calculada: {item.edadcal}, edad actual:{item.edad}
            </Text>
    </View>
    );
}

const UseReducerScreen = function () {
    const [items, itemsDispatcher] = useState([]);

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState(0);
    const [edadcal, setEdadcal] = useState(0);
    const [contador,setContador] = useState(0);

    const add = () => {
      itemsDispatcher(items.concat({ nombre, edad, edadcal: parseInt(edad) + parseInt(edadcal) }))
    };

    const sum = () => {
      itemsDispatcher(items => {
        let newitems = items.map((item, index) => {
            item.edadcal = parseInt(item.edad) + parseInt(edadcal + 1);
            return item
        });
        return newitems
    })
    setContador(contador+1);
    setEdadcal(edadcal + 1);
      };
      const min = () => {
        itemsDispatcher(items => {
          let newitems = items.map((item, index) => {
              item.edadcal = parseInt(item.edadcal) - 1;
              return item
          });
          return newitems
      })
      setContador(contador-1);
      setEdadcal(edadcal - 1);
      };

    return (
        <View>
            <Text>Nombre</Text>
            <TextInput value={nombre} onChangeText={t  => setNombre(t)} />
            <Text>Edad</Text>
            <TextInput value={edad} onChangeText={setEdad} />
            <Button title="Agregar" onPress={add} />
            <FlatList data={items} renderItem={renderItem}/>
            <Text>{contador}</Text>
            <Button title="Incrementar" onPress={sum} />
            <Button title="Decrementar" onPress={min} />
        </View>
    );
}

export default UseReducerScreen;