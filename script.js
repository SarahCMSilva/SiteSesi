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
  
  // Gerencia o envio do formulário com cálculo de pontuação e diagnóstico
  document.getElementById("questionnaire-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar respostas de botões de rádio
    const responses = {
        stress: parseInt(document.querySelector('input[name="stress"]:checked').value),
        sono: parseInt(document.querySelector('input[name="sono"]:checked').value),
        energia: parseInt(document.querySelector('input[name="energia"]:checked').value),
        ansiedade: parseInt(document.querySelector('input[name="ansiedade"]:checked').value),
        interesse: parseInt(document.querySelector('input[name="interesse"]:checked').value),
        social: parseInt(document.querySelector('input[name="social"]:checked').value),
        saude: parseInt(document.querySelector('input[name="saude"]:checked').value)
    };

    // Calcular pontuação total
    const score = 
        responses.stress +
        (6 - responses.sono) +
        (6 - responses.energia) +
        responses.ansiedade +
        (6 - responses.interesse) +
        (6 - responses.social) +
        (6 - responses.saude);

    // Gerar diagnóstico com base na pontuação
    let diagnosis = "";
    if (score <= 7) {
        diagnosis = "Você está em um ótimo estado geral. Continue cuidando bem de si mesmo!";
    } else if (score <= 14) {
        diagnosis = "Você pode estar enfrentando alguns desafios, mas nada preocupante. Fique atento aos sinais.";
    } else if (score <= 21) {
        diagnosis = "Atenção! Algumas áreas da sua vida podem estar afetando seu bem-estar. Considere buscar apoio.";
    } else if (score <= 28) {
        diagnosis = "Preocupante! É recomendável procurar a ajuda de um profissional para lidar com essas questões.";
    } else {
        diagnosis = "Nível crítico! Recomendamos que você procure imediatamente a ajuda de um profissional de saúde.";
    }

    // Exibir resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Resultados do Questionário:</h3>
        <p><strong>Diagnóstico:</strong> ${diagnosis}</p>
        <p><strong>Pontuação Total:</strong> ${score}</p>
    `;
});
s