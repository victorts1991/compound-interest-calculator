import React from 'react'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

interface IFieldRadioItem {
    label: string;
    value: string;
}

interface IFieldRadio {
    radioProps: IFieldRadioItem[];
    onPress: (value: string) => void;
    isSelected: string;
    testID: string;
}

export function FieldRadio({ radioProps, onPress, isSelected, testID }: IFieldRadio) {
    
    return (
        <RadioForm
            formHorizontal={true}
            animation={true}
        >
            {
                radioProps.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i} >
                    <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={isSelected === obj.value}
                        onPress={(value) => onPress(obj.value)}
                        testID={testID + '-input-' + obj.value}
                        buttonInnerColor={'#2196f3'}
                        buttonOuterColor={isSelected === obj.value ? '#2196f3' : '#2196f3'}
                        buttonSize={10}
                        buttonOuterSize={25}
                        buttonStyle={{borderWidth: 1}}
                        buttonWrapStyle={{marginLeft: 0}}
                        
                    />
                    <RadioButtonLabel
                        obj={obj}
                        index={i}
                        testID={testID + '-label-' + obj.value}
                        labelHorizontal={true}
                        onPress={(value) => onPress(obj.value)}
                        labelStyle={{fontSize: 12, marginLeft: -5, color: '#000'}}
                        labelWrapStyle={{}}
                    />
                </RadioButton>
                ))
            }  
        </RadioForm>
    )
}