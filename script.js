// Gerencia as abas com animação suave
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');
  
      // Remove a classe "active" de todos os botões
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
      // Adiciona a classe "active" ao botão clicado
      button.classList.add('active');
  
      // Esconde todas as seções
      document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
  
      // Mostra a seção correspondente
      document.getElementById(tab).classList.remove('hidden');
    });
  });
  
  // Gerencia o envio do formulário
  document.getElementById('questionnaire-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const stress = document.getElementById('stress').value;
    const sono = document.getElementById('sono').value;
    const interesse = document.getElementById('interesse').value;
  
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
      <h3>Resultados do Questionário:</h3>
      <p><strong>Estresse:</strong> ${stress}</p>
      <p><strong>Qualidade do Sono:</strong> ${sono}</p>
      <p><strong>Interesse em Psicologia:</strong> ${interesse}</p>
    `;
  });
  