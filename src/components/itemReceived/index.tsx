import React, { useState } from 'react';
import { View, Animated, Text, Image, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import IconToi from '../../config/icontoi';


import styles from './styles';
import { colors } from '../../styles';

interface Props {
    id: number;
    user: string;
    proffession: string;
    image: string;
    save: boolean;
    onRightPress: any;
    onLeftPress: any;

}



const ItemReceived: React.FC<Props> = (props) => {


    const [itemAnimated, setItemAnimated] = useState(new Animated.Value(0));
    const [refItem, setRefItem] = useState<Swipeable | null>();
    const [interpolatedColor, setInterpolatedColor] = useState(new Animated.Value(0));

    const LeftActions = (progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {

        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });

        return (
            <View style={styles.leftAction}>
                <Animated.Text style={{ transform: [{ scale }] }}>
                    <IconToi name="save" size={35} color="#FFF" />
                </Animated.Text>
            </View>
        )
    }

    const RightActions = (progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
        
        const scale = dragX.interpolate({
            inputRange: [-50, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });

        return (
            <Animated.View style={[styles.rightAction, { transform: [{ translateX: itemAnimated }] }]}>
                <TouchableOpacity style={styles.rightButton} activeOpacity={0.8} onPress={handleTrash}>
                    <View  >
                        <Animated.Text style={{ transform: [{ scale }] }}>
                            <IconToi name="trash" size={35} color="#FFF" />
                        </Animated.Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        )
    }

    async function handleTrash() {

        //executa a animação e depois apaga o item
        Animated.timing(
            itemAnimated,
            {
                toValue: -1000,
                duration: 400,
                useNativeDriver: true,
            }
        ).start(() => {
            props.onRightPress(props.id === undefined ? 0 : props.id);
        })
    }

    async function handleSave() {

        // fecha o card e altera o estado
        if (refItem !== null && refItem !== undefined) {
            refItem.close()
            props.onLeftPress(props.id === undefined ? 0 : props.id);
        }

        // verifica o estado antigo, para aplicar a animação
        let value = props.save ? 0 : 1;

        // animação da opacidade da borda do card
        Animated.timing(
            interpolatedColor,
            {
                duration: 500,
                toValue: value,
                useNativeDriver: true,
            }
        ).start();

    }

    return (

        <Animated.View>
            <Swipeable
                ref={(ref) => setRefItem(ref)}
                renderLeftActions={LeftActions}
                renderRightActions={RightActions}
                onSwipeableLeftOpen={handleSave}
                overshootLeft={false}
                overshootRight={false}
                overshootFriction={5}
            >

                <Animated.View style={[{ position: 'relative', marginVertical: 10 }, { transform: [{ translateX: itemAnimated }] }]}>
                    <Animated.View style={[styles.toiContainerSave, { opacity: interpolatedColor }]}>
                    </Animated.View>
                    <View style={[styles.toiContainer,]} >
                        <View style={styles.toiHeader}>
                            <View style={styles.userContainer} >
                                <Image
                                    style={styles.userImage}
                                    source={require('../../assets/img//test/sem_perfil.jpg')}
                                />
                                <View>
                                    <Text style={styles.userName}>
                                        {props.user}
                                    </Text>
                                    <Text style={styles.userDescription}>
                                        {props.proffession}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.timeRecived}>
                                    13 min
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.toiMain,]}>
                            <Text style={styles.toiMainText} numberOfLines={3}>
                                Como utilizar a ferramenta do moodle, de forma que eu consiga organizar por salas de aula?xcccccccccccsssssssssssss
                            </Text>
                        </View>
                        <View style={styles.toiFooter}>
                            <TouchableOpacity style={styles.toiFooterButton} activeOpacity={0.7}>
                                <IconToi name="send" size={25} color={colors.text} style={{ marginTop: 3 }} />
                                <Text style={styles.toiFooterText}>Responder</Text>
                            </TouchableOpacity >
                        </View>
                    </View>
                </Animated.View>
            </Swipeable>
        </Animated.View>
    )
}

export default ItemReceived;