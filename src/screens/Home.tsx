import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";

function Home(): React.JSX.Element {
    return(
        <View>
            <Head />
            <Text >Tela Principal</Text>
            <Footer />
        </View>
    );
}

export default Home;
