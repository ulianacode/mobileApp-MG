import React from 'react';
import { ScrollView, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton/BackButton';
import IconButtons from '../../components/IconButtons/IconButtons';
import AddEventForm from '../../components/AddEventCard/AddEventForm';

const AddingEventCard = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container} contentInsetAdjustmentBehavior="never">
            <BackButton onPress={handleBackPress} />
            <IconButtons />
            <AddEventForm />
        </ScrollView>
    );
};

export default AddingEventCard;