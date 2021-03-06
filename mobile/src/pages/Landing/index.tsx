import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import giveClassesImg from '../../assets/images/icons/give-classes.png';
import heartImg from '../../assets/images/icons/heart.png';
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    const { navigate } = useNavigation();
    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses')
    }
    function handleNavigateToStudyPage() {
        navigate('Study');
    }
    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        });
    }, [totalConnections])
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImg} />
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudyPage} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyImg} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesImg} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexōes já realizadas {' '}
                <Image source={heartImg} />
            </Text>
        </View>
    );
}

export default Landing;