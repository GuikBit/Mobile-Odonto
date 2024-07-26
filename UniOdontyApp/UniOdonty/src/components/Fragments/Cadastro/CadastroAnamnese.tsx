import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../../../globals/GlogalContext';
import CustomTextInput from '../CustomTextInput';
import { Switch } from 'react-native-paper';

const CadastroAnamnese = ({subTitulo}) => {
    const { theming, settings, paciente, setPaciente, useScaledFontSize, fontsSize } = useContext(GlobalContext);

  return (
    <View style={{flex: 1, backgroundColor: theming.background, marginTop: 25, paddingVertical: 5 }}>
        <Text style={[styles.titulo, { fontSize: 24, color: theming.primary}]}>{subTitulo}</Text>
        <CustomTextInput label="Portador(a) de alguma doença?" iconLeft='virus' onChange={(e: any) => setPaciente({ ...paciente, anamnese: { ...paciente.anamnese, problemaSaude: e }})} value={paciente.anamnese.problemaSaude} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
        <CustomTextInput label="Em tratamento médico?" iconLeft='medical-bag' onChange={(e: any) => setPaciente({ ...paciente, anamnese: { ...paciente.anamnese, tratamento: e }})} value={paciente.anamnese.tratamento} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
        <CustomTextInput label="Em uso de medicação?" iconLeft='pill' onChange={(e: any) => setPaciente({ ...paciente, anamnese: { ...paciente.anamnese, remedio: e }})} value={paciente.anamnese.remedio} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
        <CustomTextInput label="Alérgico(a) a algum tipo de medicamento?" iconLeft={require('../../../../assets/img/pill-off.png')} onChange={(e: any) => setPaciente({ ...paciente, anamnese: { ...paciente.anamnese, alergia: e }})} value={paciente.anamnese.alergia} height={45} bgLabel={ settings.theming === 'dark'? '#222222':'#e4e9ef'} />
        
        <View style={styles.switchs}>            
            <View style={{width: '80%'}}>
                <Text style={[styles.texto, {color: theming.inputLabelColor}]}>Hipertenso?</Text>
            </View>
            <View style={{width: '20%'}}>
                <Switch
                    color="#2070B4"
                    value={paciente.anamnese.hipertenso}
                    onValueChange={() =>
                        setPaciente({
                        ...paciente,
                        anamnese: {
                            ...paciente.anamnese,
                            hipertenso: !paciente.anamnese.hipertenso,
                        },
                        })
                    }
                />
            </View>
        </View>
        <View style={styles.switchs}>
            <View style={{width: '80%'}}>
                <Text style={[styles.texto, {color: theming.inputLabelColor}]}>Está Gestante?</Text>
            </View>            
            <View style={{width: '20%'}}>
                <Switch
                    color="#2070B4"
                    value={paciente.anamnese.gravida}
                    onValueChange={() =>
                        setPaciente({
                        ...paciente,
                        anamnese: {
                            ...paciente.anamnese,
                            gravida: !paciente.anamnese.gravida,
                        },
                        })
                    }
                />
            </View>
        </View>
        <View style={styles.switchs}>
            <View style={{width: '80%'}}>
                <Text style={[styles.texto, {color: theming.inputLabelColor}]}>Possui algum traumatismo na face?</Text>
            </View>
            <View style={{width: '20%'}}>
                <Switch
                    color="#2070B4"
                    value={paciente.anamnese.traumatismoFace}
                    onValueChange={() =>
                        setPaciente({
                        ...paciente,
                        anamnese: {
                            ...paciente.anamnese,
                            traumatismoFace: !paciente.anamnese.traumatismoFace,
                        },
                        })
                    }
                />
            </View>            
        </View>
        <View style={styles.switchs}>
            <View style={{width: '80%'}}>
                <Text style={[styles.texto, {color: theming.inputLabelColor}]}>Possui sangramento excessivo?</Text>
            </View>
            <View style={{width: '20%'}}>
                <Switch
                    color="#2070B4"
                    value={paciente.anamnese.sangramentoExcessivo}
                    onValueChange={() =>
                        setPaciente({
                        ...paciente,
                        anamnese: {
                            ...paciente.anamnese,
                            sangramentoExcessivo: !paciente.anamnese.sangramentoExcessivo,
                        },
                        })
                    }
                />
            </View>
        </View>
    </View>
  )
}

export default CadastroAnamnese

const styles = StyleSheet.create({
    texto: {
        fontSize: 18,
        marginBottom: 15,
        marginLeft: 10,
        color: 'black',
        top: 15,
      },
      cadastro: {
        height: 600,
        justifyContent: 'space-around',
        marginHorizontal: 20,
      },
      input: {
        height: 50,
        fontSize: 18,
        backgroundColor: '#FFFFFF', //Cor de Fundo
        color: '#24AAE3', //Azul Claro
      },
      switchs: {
        flexDirection: 'row',
        verticalAlign: 'auto',
      },
      switch: {
        color: '#2070B4',

      },  titulo:{
        fontWeight: 600,
        alignSelf: 'center',
        
    }
})