export interface Product {
    id: number;
    codigo: string;
    descricao: string;
    valorNormal: number;
    valorComDesconto: number;
    detalhes: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      codigo: 'PROD001',
      descricao: 'Smartphone Samsung Galaxy A54',
      valorNormal: 1299.99,
      valorComDesconto: 999.99,
      detalhes: 'Smartphone com 128GB de armazenamento, câmera tripla de 50MP, tela Super AMOLED de 6.4 polegadas e processador Exynos 1380.'
    },
    {
      id: 2,
      codigo: 'PROD002',
      descricao: 'Notebook Lenovo IdeaPad 3',
      valorNormal: 2499.99,
      valorComDesconto: 1999.99,
      detalhes: 'Notebook com processador Intel Core i5, 8GB RAM, SSD 256GB, tela 15.6 polegadas Full HD e Windows 11.'
    },
    {
      id: 3,
      codigo: 'PROD003',
      descricao: 'Fone de Ouvido JBL Tune 720BT',
      valorNormal: 399.99,
      valorComDesconto: 299.99,
      detalhes: 'Fone de ouvido Bluetooth com cancelamento de ruído, bateria de até 76 horas e som JBL Pure Bass.'
    },
    {
      id: 4,
      codigo: 'PROD004',
      descricao: 'Smart TV LG 55" 4K',
      valorNormal: 2799.99,
      valorComDesconto: 2299.99,
      detalhes: 'Smart TV 55 polegadas com resolução 4K, sistema webOS, HDR10 e controle remoto Magic.'
    },
    {
      id: 5,
      codigo: 'PROD005',
      descricao: 'Console PlayStation 5',
      valorNormal: 4199.99,
      valorComDesconto: 3799.99,
      detalhes: 'Console de videogame com SSD ultra-rápido, suporte a jogos 4K, controle DualSense com feedback tátil.'
    },
    {
      id: 6,
      codigo: 'PROD006',
      descricao: 'iPhone 15 Pro 128GB',
      valorNormal: 7999.99,
      valorComDesconto: 7299.99,
      detalhes: 'iPhone com chip A17 Pro, câmera tripla de 48MP, tela Super Retina XDR de 6.1 polegadas e Action Button.'
    },
    {
      id: 7,
      codigo: 'PROD007',
      descricao: 'MacBook Air M2 13"',
      valorNormal: 8999.99,
      valorComDesconto: 8299.99,
      detalhes: 'MacBook Air com chip M2, 8GB RAM, SSD 256GB, tela Liquid Retina de 13.6 polegadas e bateria de até 18 horas.'
    },
    {
      id: 8,
      codigo: 'PROD008',
      descricao: 'Tablet Samsung Galaxy Tab S9',
      valorNormal: 1899.99,
      valorComDesconto: 1599.99,
      detalhes: 'Tablet com tela AMOLED de 11 polegadas, processador Snapdragon 8 Gen 2, 8GB RAM, 128GB storage e S Pen incluída.'
    },
    {
      id: 9,
      codigo: 'PROD009',
      descricao: 'Apple Watch Series 9 45mm',
      valorNormal: 2999.99,
      valorComDesconto: 2699.99,
      detalhes: 'Smartwatch com chip S9, tela Always-On Retina, GPS, monitoramento de saúde avançado e resistência à água.'
    },
    {
      id: 10,
      codigo: 'PROD010',
      descricao: 'Câmera Canon EOS R10',
      valorNormal: 3799.99,
      valorComDesconto: 3299.99,
      detalhes: 'Câmera mirrorless com sensor APS-C de 24.2MP, gravação 4K, autofoco Dual Pixel CMOS AF II e Wi-Fi integrado.'
    },
    {
      id: 11,
      codigo: 'PROD011',
      descricao: 'Monitor Gamer ASUS 27" 144Hz',
      valorNormal: 1599.99,
      valorComDesconto: 1299.99,
      detalhes: 'Monitor Full HD de 27 polegadas, taxa de atualização de 144Hz, tempo de resposta 1ms, G-Sync Compatible.'
    },
    {
      id: 12,
      codigo: 'PROD012',
      descricao: 'Teclado Mecânico Logitech G915',
      valorNormal: 899.99,
      valorComDesconto: 749.99,
      detalhes: 'Teclado mecânico sem fio com switches GL Tactical, iluminação RGB LIGHTSYNC, conexão wireless e USB-C.'
    },
    {
      id: 13,
      codigo: 'PROD013',
      descricao: 'Mouse Gamer Razer DeathAdder V3',
      valorNormal: 399.99,
      valorComDesconto: 329.99,
      detalhes: 'Mouse gamer com sensor Focus Pro 30K, 8 botões programáveis, switches ópticos Razer e design ergonômico.'
    },
    {
      id: 14,
      codigo: 'PROD014',
      descricao: 'Caixa de Som JBL Charge 5',
      valorNormal: 699.99,
      valorComDesconto: 549.99,
      detalhes: 'Caixa de som Bluetooth portátil à prova d\'água IP67, bateria de 20 horas, PartyBoost e powerbank integrado.'
    },
    {
      id: 15,
      codigo: 'PROD015',
      descricao: 'Drone DJI Mini 3',
      valorNormal: 2799.99,
      valorComDesconto: 2399.99,
      detalhes: 'Drone compacto com câmera 4K HDR, gimbal de 3 eixos, tempo de voo de 38 minutos, peso inferior a 249g.'
    }
  ];