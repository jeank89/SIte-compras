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
  IonItem,
  IonLabel,
  IonBackButton,
  IonButtons,
  IonToast
} from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import { products } from '../data/products';
import { useApp } from '../contexts/AppContext';
import { useState } from 'react';

const Produto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { addToCart } = useApp();
  const [showToast, setShowToast] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <IonPage>
        <IonContent>
          <IonText>Produto não encontrado</IonText>
        </IonContent>
      </IonPage>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleBuyProduct = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Produto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{product.descricao}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel>
                <h3>Código</h3>
                <p>{product.codigo}</p>
              </IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel>
                <h3>Valor Normal</h3>
                <p style={{ textDecoration: 'line-through', color: '#666' }}>
                  {formatPrice(product.valorNormal)}
                </p>
              </IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel>
                <h3>Valor com Desconto</h3>
                <p style={{ color: '#2dd36f', fontSize: '1.2em', fontWeight: 'bold' }}>
                  {formatPrice(product.valorComDesconto)}
                </p>
              </IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel>
                <h3>Detalhes</h3>
                <p>{product.detalhes}</p>
              </IonLabel>
            </IonItem>
            
            <IonButton 
              expand="block" 
              color="success"
              onClick={handleBuyProduct}
              style={{ marginTop: '20px' }}
            >
              Comprar Produto
            </IonButton>
          </IonCardContent>
        </IonCard>
        
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Produto adicionado ao carrinho!"
          duration={2000}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Produto;