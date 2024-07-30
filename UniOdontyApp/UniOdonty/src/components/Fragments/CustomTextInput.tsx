import React, { Component, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, HelperText, Text, TextInput } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';
import { GlobalContext } from '../../globals/GlogalContext';



const CustomTextInput = ({label, error, errorLabel, iconLeft, iconRight, onChange, value, readOnly, borderBold, isSecure, handlerSenha, multLine, numLine, keyboardType, mask, maxLeng, height, bgLabel, isLoadingRight}) => {

    const { theming } = useContext(GlobalContext);

    return (
        <>
      {mask ? (
        <TextInput
          mode="outlined"
          keyboardType={keyboardType}
          label={<Text style={{ color: error ? theming.inputError : theming.inputLabelColor }}>{label}</Text>}
          multiline={multLine}
          numberOfLines={multLine ? numLine : 1}
          secureTextEntry={isSecure}
          error={error}
          maxLength={maxLeng}
          render={(props) => <MaskInput {...props} mask={mask} />}
          left={
            iconLeft ? (
              <TextInput.Icon
                icon={iconLeft}
                color={error ? theming.inputError : theming.inputIconColor}
                style={{ marginTop: 15 }}
                size={18}
              />
            ) : null
          }
          right={
            true ? (
              <ActivityIndicator animating={true} size={18} color={theming.primary} style={{ marginTop: 15 }} />
            ) : (
              iconRight ? (
                <TextInput.Icon
                  icon={iconRight}
                  color={error ? theming.inputError : theming.inputIconColor}
                  onPress={handlerSenha}
                  style={{ marginTop: 15 }}
                  size={18}
                />
              ) : null
            )
          }
          selectionColor={theming.inputBorderSelectionColor}
          outlineColor={theming.inputBorderColor}
          outlineStyle={{ borderRadius: 7, borderWidth: 1 }}
          activeOutlineColor={theming.inputBorderSelectionColor}
          style={{
            height: height ? height : 45,
            fontSize: 18,
            backgroundColor: 'transparent',
            width: '100%',
            alignSelf: 'center'
          }}
          textColor={theming.inputTextColor}
          theme={{ colors: { background: bgLabel ? bgLabel : theming.background } }}
          onChangeText={onChange}
          value={value}
          readOnly={readOnly}

        />
      ) : (
        <TextInput
          mode="outlined"
          keyboardType={keyboardType}
          label={<Text style={{ color: error ? theming.inputError : theming.inputLabelColor }}>{label}</Text>}
          multiline={multLine}
          numberOfLines={multLine ? numLine : 1}
          secureTextEntry={isSecure}
          error={error}
          maxLength={maxLeng? maxLeng:null}
          left={
            iconLeft ? (
              <TextInput.Icon
                icon={iconLeft}
                color={error ? theming.inputError : theming.inputIconColor}
                style={{ marginTop: 15 }}
                size={18}
              />
            ) : null
          }
          right={
            isLoadingRight ? (
              <ActivityIndicator animating={true} size={18} color={theming.primary} style={{ marginTop: 15 }} />
            ) : (
              iconRight ? (
                <TextInput.Icon
                  icon={iconRight}
                  color={error ? theming.inputError : theming.inputIconColor}
                  onPress={handlerSenha}
                  style={{ marginTop: 15 }}
                  size={18}
                />
              ) : null
            )
          }
          selectionColor={theming.inputBorderSelectionColor}
          outlineColor={theming.inputBorderColor}
          outlineStyle={{ borderRadius: 7, borderWidth: 1 }}
          activeOutlineColor={theming.inputBorderSelectionColor}
          style={{
            height: height ? height : 45,
            fontSize: 18,
            backgroundColor: 'transparent',
            width: '100%',
            alignSelf: 'center'
          }}
          textColor={theming.inputTextColor}
          theme={{ colors: { background: bgLabel ? bgLabel : theming.background } }}
          onChangeText={onChange}
          value={value}
          readOnly={readOnly}

        />
      )}
      
      {error ? (
        <HelperText type="error" visible={error}>
          {errorLabel}
        </HelperText>
      ):(
        <HelperText type="error" visible={value === ''}>
          *Obrigatório
        </HelperText>
      )}
      
    </>
    )
  
}

const styles = StyleSheet.create({})

export default CustomTextInput;


