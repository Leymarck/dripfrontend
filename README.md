# 🛒 Drip Store Frontend

Um e-commerce moderno e responsivo desenvolvido com React e Vite, simulando uma loja virtual completa, com filtros inteligentes, carrossel de promoções e carrinho com persistência.  
  
> Projeto colaborativo desenvolvido por:
- [Érico Freitas](https://github.com/EricofreitasNeto)
- [Kelsen Rian Araujo Pinho](https://github.com/Kelsen-Rian) [Contato](https://wa.me/5585991534299?text=Ol%C3%A1%2C%20tudo%20bem%3F%0A%0AEntrei%20em%20contato%20porque%20vi%20seu%20projeto%20no%20GitHub%3A%20https%3A%2F%2Fgithub.com%2FLeymarck%2Fdripfrontend%20e%20achei%20muito%20interessante.%0A%0AGostaria%20de%20conversar%20com%20voc%C3%AA%20sobre%20uma%20ideia%20de%20projeto%20que%20tenho%3A%0A%0A%5BDIGITE%20SUA%20IDEIA%20AQUI%5D%0A%0AFico%20no%20aguardo%20para%20saber%20se%20podemos%20conversar%20melhor%20sobre%20isso.%0AGrande%20abra%C3%A7o!)
- [Hudson Lopes da Silva](https://github.com/Leymarck) [Contato](https://wa.me/5585986404503?text=Ol%C3%A1%2C%20tudo%20bem%3F%0A%0AEntrei%20em%20contato%20porque%20vi%20seu%20projeto%20no%20GitHub%3A%20https%3A%2F%2Fgithub.com%2FLeymarck%2Fdripfrontend%20e%20achei%20muito%20interessante.%0A%0AGostaria%20de%20conversar%20com%20voc%C3%AA%20sobre%20uma%20ideia%20de%20projeto%20que%20tenho%3A%0A%0A%5BDIGITE%20SUA%20IDEIA%20AQUI%5D%0A%0AFico%20no%20aguardo%20para%20saber%20se%20podemos%20conversar%20melhor%20sobre%20isso.%0AGrande%20abra%C3%A7o!)

---

## ✨ Funcionalidades

- 🛍 Página inicial com carrossel de promoções automáticas  
- 🔥 Destaques de produtos com selo de desconto  
- 🧾 Página de listagem com filtros por categoria, gênero, marca e estado  
- 🧠 Filtro funcional por categoria (ex: “Tênis”)  
- 📦 Página de visualização detalhada do produto com imagens, tamanhos e cores  
- 🛒 Carrinho de compras com persistência via `localStorage`  
- ➕ Botões de “Adicionar ao carrinho” e “Ver mais” por produto  
- 🎯 Layout totalmente responsivo baseado em design do Figma  
- 🖼 Imagens reais de produtos  

---

## ⚙️ Tecnologias Utilizadas

- ⚛️ **React** (com Vite)  
- 📦 **React Router DOM**  
- 🎨 **TailwindCSS**  
- 🗂 **Context API**  
- 🧠 **JavaScript**  
- 💾 **localStorage**

---

## 📦 Instalação do Projeto

### Criando o projeto com Vite:

```bash
npm create vite@latest
```

# Após isso, entre na pasta do projeto:
```bash
cd nome-do-projeto
npm install
```

# Abra no VS Code:
```bash
code .
```

# Instale também:
```bash
npm install react-router-dom
```

```bash
npm i axios
```

#### 🧵 TailwindCSS – Possíveis Erros
Se o TailwindCSS não instalar corretamente, pode ser problema de versão incompatível com o Vite 7. Solução:

⚠️ Downgrade do Vite:
``` bash
npm uninstall vite
npm install -D vite@6 
```

⚙️ Instalação do TailwindCSS:
``` bash
npm install -D tailwindcss @tailwindcss/vite
npx tailwindcss init -p 
```

✅ Verifique se o package.json está assim:
``` json
"devDependencies": {
  "@eslint/js": "^9.29.0",
  "@tailwindcss/vite": "^4.1.10",
  "@types/react": "^19.1.8",
  "@types/react-dom": "^19.1.6",
  "@vitejs/plugin-react": "^4.5.2",
  "autoprefixer": "^10.4.21",
  "eslint": "^9.29.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.20",
  "globals": "^16.2.0",
  "postcss": "^8.5.6",
  "tailwindcss": "^3.4.1",
  "vite": "^6.3.5"
} 
```

Se mais algum erro ocorrer, veja se é possível instalar
```bash
npm install -D tailwindcss@^3.4.1
```

Depois, tente rodar novamente:
```bash
npx tailwindcss init -p
```


🛠 Arquivo tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
```

# 💌 Agradecimentos
Um agradecimento gigante à mestre [Nazaré Almeida](https://github.com/nazare4lmeida) 🙏
Obrigado pelas aulas, pelas dicas e por tanta dedicação!

#### Faça tudo com amor! ❤️