import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";

// Components
import Header from '../../components/header';
import style from './styles';

const Home = () => {

    const [filter, setFilter] = useState(0);

    // Teste de filtros
    const filtros = [
        { id: 1, nome: 'Programação' },
        { id: 2, nome: 'Anime' },
        { id: 3, nome: 'Cáculo' },
        { id: 4, nome: 'React Native' },
    ];

    // Teste toi recebidos
    const recivedTois = [
        { id: 1, user: 'Arielle Tsunoda', proffession: 'Professora de História' },
        { id: 2, user: 'João Tsunoda', proffession: 'Estudante' },
        { id: 3, user: 'Wladmir Reis', proffession: 'Músico' },
        { id: 4, user: 'Rose Almeida', proffession: 'Do lar' },
  
    ]

    // adicionando a opção default 'Todos' como primeiro elemento
    filtros.unshift({ id: 0, nome: 'Todos' });

    // function handleFilter(id: number) {
    //     setFilter(id);
    // }


    return (
        <>
            <Header />
            <View style={style.container}>
                <View>
                    <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 10 }}>
                        {
                            filtros.map(filtro => (
                                <TouchableOpacity
                                    key={filtro.id}
                                    activeOpacity={0.7}
                                    style={[style.filterView, filtro.id === filter ? style.filterActive : {}]}
                                    onPress={() => setFilter(filtro.id)}
                                >
                                    <Text
                                        style={[style.filterText, filtro.id === filter ? { color: '#000' } : {}]}
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
                    renderItem={({ item }) => (
                        <View style={style.toiContainer} >
                            <View style={style.toiHeader}>
                                <View style={style.userContainer} >
                                    <Image
                                        style={style.userImage}
                                        source={require('../../assets/img/perfil.jpg')}
                                    />
                                    <View>
                                        <Text style={style.userName}>
                                            {item.user}
                                    </Text>
                                        <Text style={style.userDescription}>
                                            {item.proffession}
                                    </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={style.timeRecived}>
                                        11 min
                                </Text>
                                </View>
                            </View>
                            <View style={style.toiMain}>
                                <Text style={style.toiMainText} numberOfLines={3}>
                                    Como utilizar a ferramenta do moodle, de forma que eu consiga organizar por salas de aula?
                            </Text>
                            </View>
                            <View style={style.toiFooter}>
                                <TouchableOpacity>
                                    <Text style={style.toiFooterText}>Responder</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={style.toiFooterText}>Salvar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={style.toiFooterText}> Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )}
                />

                {/* <FlatList style={{ marginTop: 10 }}>
                    <View style={style.toiContainer} >
                        <View style={style.toiHeader}>
                            <View style={style.userContainer} >
                                <Image
                                    style={style.userImage}
                                    source={require('../../assets/img/perfil.jpg')}
                                />
                                <View>
                                    <Text style={style.userName}>
                                        Arielle Tsunoda
                                    </Text>
                                    <Text style={style.userDescription}>
                                        Professora de História
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={style.timeRecived}>
                                    11 min
                                </Text>
                            </View>
                        </View>
                        <View style={style.toiMain}>
                            <Text style={style.toiMainText} numberOfLines={3}>
                                Como utilizar a ferramenta do moodle, de forma que eu consiga organizar por salas de aula?
                            </Text>
                        </View>
                        <View style={style.toiFooter}>
                            <TouchableOpacity>
                                <Text style={style.toiFooterText}>Responder</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={style.toiFooterText}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={style.toiFooterText}> Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </FlatList> */}

            </View>
        </>
    )

}

export default Home;