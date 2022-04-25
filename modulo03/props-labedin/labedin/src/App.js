import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fssz3-1.fna.fbcdn.net/v/t1.6435-9/118582120_3272771176177066_2391538270235242808_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeG2wfT0QIG8k-YIVeZ2hAfXBxij0ea9O18HGKPR5r07X16AfgVKvp2vHNWqdyzLtIy-7_3ZLPD-Ghohzh_7Zlfg&_nc_ohc=clf42h1G32MAX_vkxRV&_nc_ht=scontent.fssz3-1.fna&oh=00_AT9XZC2cteJsJ_fvt_3pAePSQ80T6mU-RHFKXDMnlOy4wA&oe=6288DBFE" 
          nome="Gabriel Cândido" 
          descricao="Oi, eu sou o Gabriel. Sou aluno da Labenu. Tenho 23 anos, 3 gatos e amo programação."
        />
        
        <ImagemButton 
          imagem="https://cdn.onlinewebfonts.com/svg/img_70394.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
    
        <CardPequeno
          tipo="E-mail: "
          descricao="algumemail@provedor.com"
        />

        <CardPequeno
          tipo="Endereço: "
          descricao="Rua Me localiza"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.vimeocdn.com/portrait/38328401_640x640" 
          nome="Curso (Labenu)" 
          descricao="Web Developer Full-Stack | HTML - CSS - Javascript - React" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Supermercado Central" 
          descricao="Op. Micro Comp. | Recebimento de NF" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
