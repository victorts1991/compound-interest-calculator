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
}

export function FieldRadio({ radioProps, onPress, isSelected }: IFieldRadio) {
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
                        onPress={onPress}
                        buttonInnerColor={'#2196f3'}
                        buttonOuterColor={isSelected === obj.value ? '#2196f3' : '#2196f3'}
                        borderWidth={1}
                        buttonSize={10}
                        buttonOuterSize={25}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 0}}
                    />
                    <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
                        onPress={onPress}
                        labelStyle={{fontSize: 12, marginLeft: -5, color: '#000'}}
                        labelWrapStyle={{}}
                    />
                </RadioButton>
                ))
            }  
        </RadioForm>
    )
}