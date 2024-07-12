import { showMessage } from 'react-native-flash-message';
import { Image } from 'react-native';
import { useContext, useEffect } from 'react';


const showCustomMessage = (descricao: string, type: any, dark: boolean) => {
    //const { theming } = useContext(GlobalContext);
    let icon: any, backgroundColor: string, titulo: string, textColor: string;

    switch(type) {
        case 'success':
            //icon = props => <Image source={require("../../../assets/imagens/checkOutline.png")} tintColor={Colors.corDeFundo} {...props} />;
            icon = <Image  source={require("../../../assets/imagens/check.png")} tintColor='#50AA46' style={{ width: 35, height: 35}} />
            backgroundColor = dark?'#0D1A0E':'#e5f3e5'
            textColor ='#50AA46'
            titulo = 'Sucesso!' 
            break;
        case 'error':
            icon = props => <Image source={require("../../../assets/imagens/close.png")} tintColor={dark?'#DC2C28':'#cc3b36'} style={{ width: 35, height: 35}} />;
            backgroundColor = dark?'#210808':'#fce5e4';
            textColor = dark?'#DC2C28':'#cc3b36';
            titulo = 'Erro!'
            break;
        case 'warning': 
            icon = props => <Image source={require("../../../assets/imagens/WarningTOutline.png")} tintColor={dark?'#cc8a26':'#b06a1e'} style={{ width: 35, height: 35}} />;
            backgroundColor = dark?'#210E08':'#f6eccb';
            textColor = dark?'#cc8a26':'#b06a1e';
            titulo = 'Aviso!'
            break;

        default:
            icon = null;
            backgroundColor = 'red'; // Adicione uma cor padrão se necessário
            break;
    }

    showMessage({
        message: titulo,
        description: descricao,
        type: type,
        icon: icon,
        animated: true,
        color: textColor,
        style: {
            width: '90%',
            alignSelf: 'center',   
            marginTop: 87,
            backgroundColor: backgroundColor,
            shadowColor: backgroundColor,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 1,
            shadowRadius: 1.41,
            borderWidth: 0.3,
            borderColor: textColor,
            borderLeftWidth: 6,
            borderLeftColor: textColor,
            borderRadius: 8,
                        
        }
    });
};

export default showCustomMessage;
