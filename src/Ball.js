import React,{Component} from "react";
import {View,StyleSheet,Animated} from "react-native";

class Ball extends Component {
    UNSAFE_componentWillMount() {
        this.position = new Animated.ValueXY(0,0);

        Animated.spring(this.position, {
            toValue: { x: 250, y: 600 },
            useNativeDriver: false
        }).start();
    }
    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ballStyle}/>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    ballStyle: {
        height: 100,
        width: 100,
        borderRadius: 100/2,
        backgroundColor: "#000000"
    },
})

export default Ball;