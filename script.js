// ===== Elementos da página (ids do index.html) =====
const burgerBtn  = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const form       = document.getElementById('petForm');
const msg        = document.getElementById('formMsg');

const campos = {
  nome:   document.getElementById('nome'),
  email:  document.getElementById('email'),
  tipo:   document.getElementById('tipo'),
  cidade: document.getElementById('cidade'),
};

// ===== Menu mobile =====
function fecharMenu() {
  mobileMenu.classList.remove('open');
  burgerBtn.setAttribute('aria-expanded', 'false');
}

burgerBtn.addEventListener('click', () => {
  const aberto = mobileMenu.classList.toggle('open');
  burgerBtn.setAttribute('aria-expanded', aberto);
});

// Fecha o menu ao clicar em um link ou ao voltar para a tela grande
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', fecharMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth > 920) fecharMenu();
});

// ===== Formulário "Cadastre seu pet" =====
function emailValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

// Tira o destaque vermelho assim que a pessoa corrige o campo
Object.values(campos).forEach((campo) => {
  campo.addEventListener('input', () => campo.classList.remove('invalid'));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valido = true;

  Object.entries(campos).forEach(([nome, campo]) => {
    const valor = campo.value.trim();
    const erro = valor === '' || (nome === 'email' && !emailValido(valor));
    campo.classList.toggle('invalid', erro);
    if (erro) valido = false;
  });

  if (!valido) {
    msg.textContent = 'Preencha todos os campos corretamente.';
    msg.className = 'form-msg err';
    return;
  }

  msg.textContent = `${campos.nome.value.trim()} foi cadastrado com sucesso!`;
  msg.className = 'form-msg ok';
  form.reset();
});
