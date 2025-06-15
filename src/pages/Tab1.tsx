import React from 'react';
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
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { products } from '../data/products';

const Tab1: React.FC = () => {
  const history = useHistory();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleProductClick = (productId: number) => {
    history.push(`/produto/${productId}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Produtos</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonGrid>
          <IonRow>
            {products.map(product => (
              <IonCol size="12" sizeMd="4" key={product.id}>
                <IonCard style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <IonCardHeader>
                    <IonCardTitle style={{ 
                      fontSize: '0.9rem', 
                      lineHeight: '1.2',
                      height: '2.4rem',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {product.descricao}
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent style={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '8px 16px 16px'
                  }}>
                    <div>
                      <IonText color="medium">
                        <p style={{ 
                          textDecoration: 'line-through',
                          fontSize: '0.8rem',
                          margin: '0 0 4px 0'
                        }}>
                          De: {formatPrice(product.valorNormal)}
                        </p>
                      </IonText>
                      <IonText color="success">
                        <h3 style={{ 
                          margin: '0 0 12px 0',
                          fontSize: '1rem'
                        }}>
                          Por: {formatPrice(product.valorComDesconto)}
                        </h3>
                      </IonText>
                    </div>
                    <IonButton 
                      expand="block" 
                      fill="outline"
                      size="small"
                      onClick={() => handleProductClick(product.id)}
                    >
                      Ver Detalhes
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;