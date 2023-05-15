import React, { useState } from 'react';
import './inicial.css';
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaRegUser,
  FaRegEnvelope,
  FaLock,
} from 'react-icons/fa';

let btnCadastrar = 'Cadastrar';

export default function Login() {
  const [change, setSign] = useState('sign-in-js');

  const changeSignIn = () => {
    setSign('sign-up-js');
    btnCadastrar = 'Acessar';
  };

  const changeSignUp = () => {
    setSign('sign-in-js');
    btnCadastrar = 'Cadastrar';
  };

  return (
    <div className={change}>
      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary"> Bem vindo!</h2>
            <p className="description description-primary">
              Para manter a conexão,
            </p>
            <p className="description description-primary">
              acesse com suas credênciais!
            </p>
            <button className="btn btn-primary" onClick={changeSignUp}>
              {btnCadastrar}
            </button>
          </div>
          {/*fim da primeira coluna do primeiro conteudo*/}
          <div className="second-column">
            <h2 className="title title-second">Criar Conta</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <a href="/" className="link-social-media">
                  <li className="item-social-media">
                    <FaFacebookSquare />
                  </li>
                </a>
                <a href="/" className="link-social-media">
                  <li className="item-social-media">
                    <FaGooglePlusSquare />
                  </li>
                </a>
                <a href="/" className="link-social-media">
                  <li className="item-social-media">
                    <FaLinkedin />
                  </li>
                </a>
              </ul>
            </div>
            {/*fim da social media*/}
            <p className="description description-second">
              ou utiliza seu e-mail para registrar:
            </p>
            <form className="form">
              <label className="label-input">
                <FaRegUser className="icon-modify" />
                <input className="input" type="text" placeholder="Nome" />
                {/* fim do input nome */}
              </label>
              <label className="label-input">
                <FaRegEnvelope className="icon-modify" />
                <input className="input" type="email" placeholder="E-mail" />
                {/* fim do input email */}
              </label>
              <label className="label-input">
                <FaLock className="icon-modify" />
                <input className="input" type="password" placeholder="Senha" />
                {/* fim do input senha */}
              </label>
              <button className="btn btn-second">Criar</button>
              {/* fim do btn criar conta */}
            </form>
          </div>
          {/*fim da second column*/}
        </div>
        {/*fim do first content*/}
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary"> Olá, amigo!</h2>
            <p className="description description-primary">
              Informe suas credenciais
            </p>
            <p className="description description-primary">
              e inicie sua jornada conosco.
            </p>
            <button className="btn btn-primary" onClick={changeSignIn}>
              {btnCadastrar}
            </button>
          </div>
          {/*fim da first column*/}
          <div className="second-column">
            <h2 className="title title-second">Acessar Conta</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <a href="/" className="link-social-media">
                  <li className="item-social-media">
                    <FaFacebookSquare />
                  </li>
                </a>
                <a href="/" className="link-social-media">
                  <li className="item-social-media">
                    <FaGooglePlusSquare />
                  </li>
                </a>
                <a href="/" className="link-social-media">
                  <li className="item-social-media">
                    <FaLinkedin />
                  </li>
                </a>
              </ul>
            </div>
            {/*fim da social media*/}
            <p className="description description-second">
              ou utiliza seu e-mail para acessar:
            </p>
            <form className="form">
              <label className="label-input">
                <FaRegEnvelope className="icon-modify" />
                <input className="input" type="email" placeholder="E-mail" />
                {/* fim do input email */}
              </label>
              <label className="label-input">
                <FaLock className="icon-modify" />
                <input className="input" type="password" placeholder="Senha" />
                {/* fim do input senha */}
              </label>
              <a href="/" className="password">
                Esqueceu sua senha?
              </a>
              <button className="btn btn-second">Acessar</button>
              {/* fim do btn criar conta */}
            </form>
          </div>
          {/*fim da second column*/}
        </div>
        {/*fim do second content*/}
      </div>
    </div>
  );
}
