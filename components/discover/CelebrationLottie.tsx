import React from 'react';
import { Button, StyleSheet, View, Dimensions } from 'react-native';
import LottieView from "lottie-react-native";

export function CelebrationLottie({onDone}) {
        return (
            
                <LottieView
                    autoPlay={true}
                    loop={false}
                    autoSize={true}
                    onAnimationFinish={onDone}
                    ref={animation => {
                        let self: any = this;
                        self.animation = animation;
                    }}
                    // style={{
                    //     position: 'relative',
                    //     bottom: 0,
                    //     left: 0,
                    //     right: 0,
                    //     width: 400,
                    //     height: 400,
                        
                    // }}
                    source={require('./../../assets/celebration-lottie.json')}
                />
        );
}
