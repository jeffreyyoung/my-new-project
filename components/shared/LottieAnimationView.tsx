import React from 'react';
import { Button, StyleSheet, View, Dimensions } from 'react-native';
import LottieView from "lottie-react-native";

export class LottieAnimationView extends React.Component<any, { animation: any }> {
    
    start() {
        let self:any = this;
        self.Animation.play(0)
    }
    
    componentDidMount() {
        let self:any = this;
        self.animation.play(0, 150);
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    }

    resetAnimation = () => {
        let self:any = this;
        self.animation.reset();
        self.animation.play();
    };

    render() {
        return (
            
                <LottieView
                    autoPlay={true}
                    loop={false}
                    
                    ref={animation => {
                        let self: any = this;
                        self.animation = animation;
                    }}
                    style={{
                        width: Dimensions.get('screen').width,
                        height: 400,
                        
                    }}
                    source={require('./../../assets/celebration-lottie.json')}
                // OR find more Lottie files @ https://lottiefiles.com/featured
                // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                />
        );
    }
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});
