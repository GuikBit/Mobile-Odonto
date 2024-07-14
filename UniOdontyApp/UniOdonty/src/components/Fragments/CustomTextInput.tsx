import React, { Component, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';
import { GlobalContext } from '../../globals/GlogalContext';



const CustomTextInput = ({label, error, iconLeft, iconRight, onChange, value, readOnly, borderBold, isSecure, handlerSenha, multLine, numLine, keyboardType, mask, maxLeng, height}) => {

    const { theming } = useContext(GlobalContext);

    return (
        <>
        {mask ? (
            <TextInput
                mode="outlined"
                keyboardType={keyboardType}                
                label={<Text style={{color: error ? '#a22c28' :  theming.formLabel}}>{label}</Text>}
                multiline={multLine}
                numberOfLines={multLine? numLine : 1}
                secureTextEntry={isSecure}
                error={error}          
                maxLength={maxLeng}      
                render={(props) => (                   
                    <MaskInput
                        {...props}
                        mask={mask}
                    />                    
                )}
                left={iconLeft ? (
                    <TextInput.Icon
                        icon={iconLeft}
                        color={error ? '#a22c28' : theming.formInput}
                        style={{marginTop: 15}}
                        size={18}
                    />
                ) : null}
                right={iconRight ? (
                    <TextInput.Icon
                        icon={iconRight}
                        color={error ? '#a22c28' : theming.formInput}
                        onPress={handlerSenha}
                        style={{marginTop: 15}}
                        size={18}
                    />
                ) : null}
                selectionColor={ theming.formInput }
                outlineColor={ theming.formInput }
                outlineStyle={{ borderRadius: 7, borderWidth: error || borderBold? 1 : 0.3 }}
                activeOutlineColor={ theming.formInput }
                style={{         
                    height: height? height : 45,       
                    fontSize: 18,
                    backgroundColor: 'transparent',
                    marginTop: 13,
                    width: '100%',
                    alignSelf: 'center',
                }}
                textColor={ theming.formLabel }
                theme={{ colors: { background: theming.cardBackground } }}
                onChangeText={ onChange }
                value={value}
                readOnly={readOnly}
            
            />
            )
            :
            (
                <TextInput
                mode="outlined"
                keyboardType={keyboardType}
                label={<Text style={{ color: error ? theming.inputError :  theming.inputLabelColor }}>{label}</Text>}
                multiline={multLine}
                numberOfLines={multLine? numLine : 1}
                secureTextEntry={isSecure}
                error={error}
                left={iconLeft ? (
                    <TextInput.Icon
                        icon={iconLeft}
                        color={ error ? theming.inputError : theming.inputIconColor }
                        style={{marginTop: 15}}
                        size={18}
                    />
                ) : null}
                right={iconRight ? (
                    <TextInput.Icon
                        icon={iconRight}
                        color={ error ? theming.inputError : theming.inputIconColor }
                        onPress={handlerSenha}
                        style={{marginTop: 15}}
                        size={18}
                    />
                ) : null}
                selectionColor={ theming.inputBorderSelectionColor }
                outlineColor={ theming.inputBorderColor }
                outlineStyle={{ borderRadius: 7, borderWidth: 1 }}
                activeOutlineColor={ theming.inputBorderSelectionColor }
                style={{         
                    height: height? height : 45,        
                    fontSize: 18,
                    backgroundColor: 'transparent',
                    marginTop: 13,
                    marginBottom: 0,
                    width: '100%',
                    alignSelf: 'center',
                }}
                textColor={ theming.inputTextColor }
                theme={{ colors: { background: theming.background } }}
                onChangeText={ onChange }
                value={value}
                readOnly={readOnly}            
            />
            )
        }
       
        </>
    )
  
}

const styles = StyleSheet.create({})

export default CustomTextInput;

