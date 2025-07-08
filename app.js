<script>
  const experiencias = document.querySelectorAll('.experiencia');
  const btnAnterior = document.querySelector('.btn-anterior');
  const btnProximo = document.querySelector('.btn-proximo');

  let indiceAtual = 0;

  function mostrarExperiencia(indice) {
    experiencias.forEach((exp, i) => {
      exp.classList.toggle('active', i === indice);
    });
  }

  btnProximo.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % experiencias.length;
    mostrarExperiencia(indiceAtual);
  });

  btnAnterior.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + experiencias.length) % experiencias.length;
    mostrarExperiencia(indiceAtual);
  });
</script>