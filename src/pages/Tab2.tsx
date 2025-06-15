import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

const Tab2: React.FC = () => {
  const history = useHistory();
  const { customer } = useApp();

  const handleCadastroClick = () => {
    history.push('/cadastro');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Minha Conta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Conta</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {customer ? (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Dados do Cliente</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonLabel>
                  <h3>Nome</h3>
                  <p>{customer.nome}</p>
                </IonLabel>
              </IonItem>
              
              <IonItem>
                <IonLabel>
                  <h3>Endereço</h3>
                  <p>{customer.endereco}</p>
                </IonLabel>
              </IonItem>
              
              <IonItem>
                <IonLabel>
                  <h3>CEP</h3>
                  <p>{customer.cep}</p>
                </IonLabel>
              </IonItem>
              
              <IonItem>
                <IonLabel>
                  <h3>Cidade</h3>
                  <p>{customer.cidade}</p>
                </IonLabel>
              </IonItem>
              
              <IonItem>
                <IonLabel>
                  <h3>Bairro</h3>
                  <p>{customer.bairro}</p>
                </IonLabel>
              </IonItem>
              
              <IonItem>
                <IonLabel>
                  <h3>Estado</h3>
                  <p>{customer.estado}</p>
                </IonLabel>
              </IonItem>
              
              <IonItem>
                <IonLabel>
                  <h3>Telefone</h3>
                  <p>{customer.telefone}</p>
                </IonLabel>
              </IonItem>
              
              <IonButton 
                expand="block" 
                fill="outline"
                onClick={handleCadastroClick}
                style={{ marginTop: '20px' }}
              >
                Editar Dados
              </IonButton>
            </IonCardContent>
          </IonCard>
        ) : (
          <IonCard>
            <IonCardContent>
              <IonText>
                <h2>Bem-vindo!</h2>
                <p>Você ainda não possui um cadastro. Clique no botão abaixo para se cadastrar e aproveitar todas as funcionalidades do nosso app.</p>
              </IonText>
              
              <IonButton 
                expand="block" 
                color="primary"
                onClick={handleCadastroClick}
                style={{ marginTop: '20px' }}
              >
                Cadastrar Cliente
              </IonButton>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;