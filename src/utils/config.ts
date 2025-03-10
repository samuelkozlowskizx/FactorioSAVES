export async function loadConfig() {
  const config: { [key: string]: string } = {};
  
  try {
    // Tenta carregar o arquivo de configuração
    const response = await fetch('/config/LANGUAGE.txt');
    if (!response.ok) {
      throw new Error(`Erro ao carregar arquivo: ${response.status}`);
    }
    
    const text = await response.text();
    
    // Processa cada linha do arquivo
    text.split('\n').forEach(line => {
      line = line.trim();
      // Pula linhas vazias
      if (!line) return;
      
      // Divide a linha em chave e valor
      const [key, value] = line.split('=');
      if (key && value) {
        config[key.trim()] = value.trim();
      }
    });
    
    // Aplica as cores imediatamente
    if (config.PRIMARY_COLOR) {
      document.documentElement.style.setProperty('--color-custom-500', config.PRIMARY_COLOR);
    }
    if (config.PRIMARY_COLOR_HOVER) {
      document.documentElement.style.setProperty('--color-custom-600', config.PRIMARY_COLOR_HOVER);
    }
    
    console.log('Config loaded successfully:', config);
  } catch (error) {
    console.error('Error loading config:', error);
  }
  
  return config;
}