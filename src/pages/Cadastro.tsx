import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonBackButton,
  IonButtons,
  IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

const Cadastro: React.FC = () => {
  const history = useHistory();
  const { customer, saveCustomer } = useApp();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cep: '',
    cidade: '',
    bairro: '',
    estado: '',
    telefone: ''
  });

  useEffect(() => {
    if (customer) {
      setFormData(customer);
    }
  }, [customer]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Validação dos campos obrigatórios
    const requiredFields = ['nome', 'endereco', 'cep', 'cidade', 'bairro', 'estado', 'telefone'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());
    
    if (emptyFields.length > 0) {
      setToastMessage('Todos os campos são obrigatórios!');
      setShowToast(true);
      return;
    }

    saveCustomer(formData);
    setToastMessage('Dados salvos com sucesso!');
    setShowToast(true);
    
    setTimeout(() => {
      history.push('/tab2');
    }, 2000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Cadastro de Cliente</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              {customer ? 'Editar Dados' : 'Cadastrar Cliente'}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Nome *</IonLabel>
              <IonInput
                value={formData.nome}
                onIonInput={(e) => handleInputChange('nome', e.detail.value!)}
                placeholder="Digite seu nome completo"
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">Endereço *</IonLabel>
              <IonInput
                value={formData.endereco}
                onIonInput={(e) => handleInputChange('endereco', e.detail.value!)}
                placeholder="Digite seu endereço"
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">CEP *</IonLabel>
              <IonInput
                value={formData.cep}
                onIonInput={(e) => handleInputChange('cep', e.detail.value!)}
                placeholder="00000-000"
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">Cidade *</IonLabel>
              <IonInput
                value={formData.cidade}
                onIonInput={(e) => handleInputChange('cidade', e.detail.value!)}
                placeholder="Digite sua cidade"
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">Bairro *</IonLabel>
              <IonInput
                value={formData.bairro}
                onIonInput={(e) => handleInputChange('bairro', e.detail.value!)}
                placeholder="Digite seu bairro"
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">Estado *</IonLabel>
              <IonInput
                value={formData.estado}
                onIonInput={(e) => handleInputChange('estado', e.detail.value!)}
                placeholder="Digite seu estado"
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">Telefone *</IonLabel>
              <IonInput
                value={formData.telefone}
                onIonInput={(e) => handleInputChange('telefone', e.detail.value!)}
                placeholder="(00) 00000-0000"
              />
            </IonItem>
            
            <IonButton 
              expand="block" 
              color="success"
              onClick={handleSave}
              style={{ marginTop: '20px' }}
            >
              Salvar Dados
            </IonButton>
          </IonCardContent>
        </IonCard>
        
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
          color={toastMessage.includes('sucesso') ? 'success' : 'danger'}
        />
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;