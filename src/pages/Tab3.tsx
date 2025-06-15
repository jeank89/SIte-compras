import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { trash } from 'ionicons/icons';

const Tab3: React.FC = () => {
  const history = useHistory();
  const { cart, removeFromCart, getCartTotal, clearCart } = useApp();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const cartTotal = getCartTotal();
  const frete = 21.54;
  const totalFinal = cartTotal + frete;

  const handleFinalizarCompra = () => {
    if (cart.length === 0) {
      return;
    }
    
    // Salvar dados da compra para passar via navegação
    const purchaseData = {
      total: cartTotal,
      frete: frete,
      finalTotal: totalFinal,
      items: cart.length
    };
    
    // Limpar carrinho ANTES de navegar
    clearCart();
    
    // Navegar para página de resultado com os dados
    history.push('/resultado', { purchaseData });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Carrinho</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Carrinho</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {cart.length === 0 ? (
          <IonCard>
            <IonCardContent>
              <IonText>
                <h2>Carrinho Vazio</h2>
                <p>Adicione produtos ao seu carrinho para continuar.</p>
              </IonText>
            </IonCardContent>
          </IonCard>
        ) : (
          <>
            <IonList>
              {cart.map(item => (
                <IonItemSliding key={item.id}>
                  <IonItem>
                    <IonLabel>
                      <h2>{item.descricao}</h2>
                      <p>Quantidade: {item.quantity}</p>
                      <p>Valor unitário: {formatPrice(item.valorComDesconto)}</p>
                      <p>Subtotal: {formatPrice(item.valorComDesconto * item.quantity)}</p>
                    </IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption 
                      color="danger" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      <IonIcon icon={trash} />
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>
            
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Resumo da Compra</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel>
                    <h3>Subtotal dos Produtos</h3>
                    <p>{formatPrice(cartTotal)}</p>
                  </IonLabel>
                </IonItem>
                
                <IonItem>
                  <IonLabel>
                    <h3>Frete</h3>
                    <p>{formatPrice(frete)}</p>
                  </IonLabel>
                </IonItem>
                
                <IonItem>
                  <IonLabel>
                    <h2 style={{ color: '#2dd36f' }}>Total a Pagar</h2>
                    <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#2dd36f' }}>
                      {formatPrice(totalFinal)}
                    </p>
                  </IonLabel>
                </IonItem>
                
                <IonButton 
                  expand="block" 
                  color="success"
                  onClick={handleFinalizarCompra}
                  style={{ marginTop: '20px' }}
                >
                  Finalizar Compra
                </IonButton>
              </IonCardContent>
            </IonCard>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;