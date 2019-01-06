import React from 'react';
import PropType from 'prop-types'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

/**
 * Titulo
 * urlImagen
 * Descripción
 */

const Card = ({ title, image, description }) => {
    // ejecucion de esta funcion
    const imageSourcer = {
        uri: image
    }

    const onPressButton = () => {
        console.log('Se presionó el botón');
    };

    return (
        <View style={styles.container} >
            <Text style={styles.title} >
                {title}
            </Text>
            <Image style={styles.mainImage} source={imageSourcer} />
            <Text style={styles.description} >{description}</Text>
            <TouchableHighlight style={styles.button} underlayColor="#EEE"  onPress={onPressButton} >
                <Text style={styles.buttonText} >Ver más</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#0F0',
        padding: 10
    },
    title: {
        fontSize: 30
    },
    mainImage: {
        height: 150
    },
    button: {
        height: 30,
        marginTop: 10,
        backgroundColor: "#999"
    },
    buttonText: {
        fontSize: 20,
        color: "#222"
    },
    description: {
        marginLeft: 10,
        fontSize: 13,
        color: "#EEE"
    }
});

Card.propTypes = {
    title: PropType.string.isRequired,
    image: PropType.string.isRequired,
    description: PropType.string.isRequired
};

export default Card;
