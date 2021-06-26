import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { Button, FlatList, TextInput, View, Text } from 'react-native';
import { useEffect } from 'react/cjs/react.development';

const itemsReducer = function (state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
    }
}

const renderItem = function ({ item }) {
    return (
        <View>
            <Text>{item.nombre}</Text>
            <Text>{item.edad}</Text>
        </View>
    );

}

const UseReducerScreen = function () {
    const [items, itemsDispatcher] = useReducer(itemsReducer, []);

    const [edad, setEdad] = useState(0);
    const [contador, modificar] = useState(0);
    const [nombre, setNombre] = useState('');
    let x2 = items.edad*2;
    useEffect(function(){
        console.log('Hola');
    },[x2]);

    return (
        <View>
            <Text>Nombre</Text>
            <TextInput onChangeText={text => setNombre(text)} />
            <Text>Edad</Text>
            <TextInput onChangeText={text => setEdad(text)} />
            <Button title="Agregar" onPress={() =>
                itemsDispatcher({ type: 'ADD', payload: { edad, nombre } })
            } />
            <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.edad} />
            <Text>{contador}</Text>
            <Button title="Incrementar" onPress={() => modificar(contador + 1)} />
            <Button title="Decrementar" onPress={() => modificar(contador - 1)} />
        </View>
    );
}

export default UseReducerScreen;