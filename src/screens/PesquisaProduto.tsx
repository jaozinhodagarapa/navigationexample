import React from "react";
import { FlatList, Image,StatusBar,StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";


interface Produto {
    id: number,
    nome: string,
    ingredientes: string,
    preco: string,
    imagem: string
}


function PesquisaProduto(): React.JSX.Element {

    const produtos: Produto[] = [
        {
            id: 1,
            nome: 'HotDog',
            ingredientes: 'Pão, batata, purê ....',
            preco: '10.99',
            imagem: require('../assets/images/hamburger.png')
        },
        {
            id: 2,
            nome: 'HotDog Especial',
            ingredientes: 'Pão, batata, purê ....',
            preco: '29.99',
            imagem: require('../assets/images/hamburger.png')
        },
    ]

    const renderItem = ({item}: {item:Produto}) => {
        return (
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/images/hamburger.png')} style={styles.image}/>
                <View style={styles.itemDetails}>
                    <Text style={styles.name}>{item.nome}</Text>
                    <Text style={styles.description}>{item.ingredientes}</Text>
                    <Text style={styles.price}>{item.preco}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content"/>
            <Head />      
                <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id ? item.id.toString() :Math.random().toString()}
                contentContainerStyle={styles.menuList}
                />
            <Footer />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    } ,
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },

    itemDetails: {
        marginLeft: 10,
        flex: 1
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: '#666'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    menuList: {
        flexGrow: 1
    }
});

export default PesquisaProduto;
