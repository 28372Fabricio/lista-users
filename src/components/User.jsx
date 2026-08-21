import './User.css';

function User({ imagem, nome, idade, genero, email, telefone, empresa, cargo, cidade, estado }) {
  return (
    <div className="user-card">
      <div className="user-header">
        <img src={imagem} alt={nome} className="user-avatar" />
        <div>
          <h2 className="user-nome">{nome}</h2>
          <p className="user-sub">{idade} anos | {genero}</p>
        </div>
      </div>

      <hr className="user-divisor" />

      <div className="user-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
        <p><strong>Empresa:</strong> {empresa}</p>
        <p><strong>Cargo:</strong> {cargo}</p>
        <p><strong>Cidade:</strong> {cidade} - {estado}</p>
      </div>
    </div>
  );
}

export default User;
