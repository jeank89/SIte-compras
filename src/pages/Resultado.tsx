import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import { checkmarkCircle } from 'ionicons/icons';

interface LocationState {
  purchaseData?: {
    total: number;
    frete: number;
    finalTotal: number;
    items: number;
  };
}

const Resultado: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  
  const [purchaseData, setPurchaseData] = useState({
    total: 0,
    frete: 21.54,
    finalTotal: 21.54,
    items: 0
  });

  useEffect(() => {
    // Pegar dados da navegação ou usar valores padrão
    if (location.state?.purchaseData) {
      setPurchaseData(location.state.purchaseData);
    }
    // REMOVIDO: clearCart() daqui para evitar conflitos
  }, [location.state]); // Removido clearCart das dependências

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleVoltarInicio = () => {
    history.push('/tab1');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resultado da Compra</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader style={{ textAlign: 'center' }}>
            <IonIcon 
              icon={checkmarkCircle} 
              style={{ fontSize: '4rem', color: '#2dd36f' }}
            />
            <IonCardTitle style={{ color: '#2dd36f' }}>
              Compra Realizada com Sucesso!
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                Parabéns! Sua compra foi processada com sucesso. 
                {purchaseData.items > 0 && (
                  <> {purchaseData.items} item(s) foram processados.</>
                )}
                <br />
                Você receberá um e-mail de confirmação em breve.
              </p>
            </IonText>
            
            <IonItem>
              <IonLabel>
                <h3>Valor dos Produtos</h3>
                <p>{formatPrice(purchaseData.total)}</p>
              </IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel>
                <h3>Frete</h3>
                <p>{formatPrice(purchaseData.frete)}</p>
              </IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel>
                <h2 style={{ color: '#2dd36f' }}>Total Pago</h2>
                <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#2dd36f' }}>
                  {formatPrice(purchaseData.finalTotal)}
                </p>
              </IonLabel>
            </IonItem>
            
            <IonButton 
              expand="block" 
              color="primary"
              onClick={handleVoltarInicio}
              style={{ marginTop: '30px' }}
            >
              Voltar para a Página Inicial
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Resultado;