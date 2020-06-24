import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, LayoutAnimation, UIManager, Modal, Alert, CheckBox } from "react-native";

// Components
import Header from '../../components/header';
import ItemReceived from '../../components/itemReceived';

import styles from './styles';

interface Item {
    id: number;
    user: string;
    proffession: string;
    image: string;
    save: boolean;

}

interface ItemReceivedRef {
    handleteste: Function
}

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const Received = () => {

    const [filter, setFilter] = useState(0);

    const [recivedTois, setRecivedTois] = useState<Item[]>([]);

    const [modalVisible, setModalVisible] = useState(false);

    const itemReceived = useRef<ItemReceivedRef[]>([]);

    const setAnimation = () => {
        LayoutAnimation.configureNext({
            duration: 250,
            update: {
                type: LayoutAnimation.Types.easeIn,
                springDamping: 0.1
            }
        });
        LayoutAnimation.configureNext({
            duration: 500,
            create: {
                type: LayoutAnimation.Types.easeIn,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 0.1
            }
        });
    };

    useEffect(() => {
        // Teste toi recebidos
        async function carregaDadosTeste() {

            const items = [
                { id: 1, user: 'Arielle Tsunoda', proffession: 'Professora de História', image: '../../assets/img/arielle_perfil.jpg', save: false },
                { id: 2, user: 'João Tsunoda', proffession: 'Estudante', image: '../../assets/img/joao_perfil.jpg', save: false },
                { id: 3, user: 'Wladmir Reis', proffession: 'Músico', image: '../../assets/img/wlad_perfil.jpg', save: false },
                { id: 4, user: 'Rose Almeida', proffession: 'Do lar', image: '../../assets/img/sem_perfil.jpg', save: false },
            ];
            setRecivedTois(items);

            itemReceived.current = new Array(items.length);

        }

        carregaDadosTeste()

    }, []);

    function handleTrash(id: number) {

        const filterRecivedTois = recivedTois.filter(item => item.id !== id);

        setAnimation();
        setRecivedTois(filterRecivedTois);
    }

    function handleSave(id: number) {

        const filterRecivedTois: Item[] = recivedTois.map(item => {
            if (item.id === id) {
                item.save = item.save ? false : true;
            }
            return item;
        })

        setRecivedTois(filterRecivedTois);
    }


    // Teste de filtros
    const filtros = [
        { id: 1, nome: 'Programação' },
        { id: 2, nome: 'Anime' },
        { id: 3, nome: 'Cáculo' },
        { id: 4, nome: 'React Native' },
    ];

    // adicionando a opção default 'Todos' como primeiro elemento
    filtros.unshift({ id: 0, nome: 'Todos' });

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.filterContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
                        {
                            filtros.map(filtro => (
                                <TouchableOpacity
                                    key={filtro.id}
                                    activeOpacity={0.7}
                                    style={[styles.filterView, filtro.id === filter ? styles.filterActive : {}]}
                                    onPress={() => setFilter(filtro.id)}
                                >
                                    <Text
                                        style={[styles.filterText, filtro.id === filter ? { color: '#000' } : {}]}
                                        numberOfLines={1}
                                    >
                                        {filtro.nome}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>

                <FlatList
                    data={recivedTois}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemReceived
                                {...item}
                                onRightPress={() => handleTrash(item.id)}
                                onLeftPress={() => handleSave(item.id)}
                                setModalVisible={() => setModalVisible(true)}
                                ref={ref => itemReceived.current[index] = ref as ItemReceivedRef}
                            />
                        )
                    }}
                />

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Tem certeza que deseja marcar esse toi para responder mais tarde?</Text>
                            <View style={styles.checkModal}>
                                <CheckBox />
                                <Text> Não mostrar essa mensagem novamente</Text>
                            </View>
                            <View style={styles.footerModal}>
                                <TouchableOpacity style={styles.buttonModal} onPress={() => { setModalVisible(false); itemReceived.current[0]?.handleteste(); }}>
                                    <Text style={styles.modalTextButton}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonModal}>
                                    <Text style={styles.modalTextButton}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )

}

export default Received;