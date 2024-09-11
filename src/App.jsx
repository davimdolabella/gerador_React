import { useState } from "react";

export default function App(){
  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  function generate(){
    let newPassword = ''
    const char = '1234567890!@#$%&*()qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM?'
    const length = 8
    for(let i = 0; i < 8; i++){
      let number = Math.floor((Math.random() + 1/char.length)*char.length - 1);
      newPassword += char[number]
    }
    setPassword(newPassword)
    console.log(newPassword);
    setCopyText('Copiar')
  }
  function changeCopyText(){
    setCopyText('Copiado')
    window.navigator.clipboard.writeText(password)
  }
  return(
    <div className="col-10 col-md-7 col-lg-4 container d-flex flex-column align-items-center bg-secondary text-light rounded p-4 gap-3 mt-5 shadow shadow-light">
      <h2>Gerador de senhas</h2>
      <div className="d-flex flex-row gap-2 col-6 justify-content-center">
        <div className="btn btn-dark rounded shadow col-6" onClick={generate}>Gerar</div>
        <div className="btn btn-dark rounded shadow col-6" onClick={changeCopyText}>{copyText}</div>
      </div>
      <p>{password}</p>
    </div>
  )
}