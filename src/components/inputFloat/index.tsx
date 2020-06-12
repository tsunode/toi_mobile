import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';

import style from './styles';

interface Props {
    label: string;
    secureText?: boolean;
}

const InputFloat: React.FC<Props> = (props) => {

    const [focus, setFocus] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [topText, setTopText] = useState(new Animated.Value(18));
    const [label, setLabel] = useState(props.label);
    const [secureText, setSecureText] = useState(props.secureText as boolean);

    function handleBlur() {

        // tira o focus apenas se não foi digitado nenhum valor.
        if (inputValue.trim() === '') {
            setInputValue('');

            Animated.timing(
                topText,
                {
                    toValue: 18,
                    duration: 350,
                    useNativeDriver: true,
                }
            ).start();

            setFocus(false);
        }
    }

    console.log(secureText);

    function handleFocus() {
        Animated.timing(
            topText,
            {
                toValue: 0,
                duration: 350,
                useNativeDriver: true,
            }
        ).start();

        setFocus(true)
    }

    return (
        <View>
            <Animated.Text
                style={[
                    style.label,
                    {
                        transform: [{
                            translateY: topText
                        }]
                    },
                    focus === true ? style.labelFocus : {},
                ]}
            >
                {label}
            </Animated.Text>
            <TextInput
                autoCorrect={false}
                style={style.input}
                value={inputValue}
                secureTextEntry={secureText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={setInputValue}
            />
        </View>
    );
}

export default InputFloat;