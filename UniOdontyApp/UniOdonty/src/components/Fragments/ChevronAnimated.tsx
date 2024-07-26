import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { IconButton } from 'react-native-paper';
import { GlobalContext } from '../../globals/GlogalContext';

const ChevronAnimate = ({ onPress, size, reverse }) => {
    const { theming } = useContext(GlobalContext);
    const [expandir, setExpandir] = useState(false);
    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });


    const clickIcon = () => {
        if (expandir) {
            rotation.value = withTiming(0, { duration: 120, easing: Easing.linear });           
        } else {            
            rotation.value = withTiming(+180, { duration: 120, easing: Easing.linear });
        }
        setExpandir(!expandir); 
        onPress();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.iconContainer, animatedStyle]}>
                <IconButton
                    icon={reverse? "chevron-up":"chevron-down"}
                    iconColor={theming.corIcone}
                    size={size}
                    onPress={clickIcon}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ChevronAnimate;
