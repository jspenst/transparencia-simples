import { useState, useEffect} from 'react'

const Profile = (props) => {
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)  
    const nome = props.nome
    const orgaoServidorExercicio = props.orgao

    useEffect(() => {
      const pagina = '1'
      const url = 'https://api.portaldatransparencia.gov.br/api-de-dados/servidores?'
      const parameters = {
      headers: {
      'chave-api-dados': '1385c8abafee55f02d848fcee11ac219',
          },
      }
        fetch(url + new URLSearchParams({nome, orgaoServidorExercicio, pagina}), parameters)
          .then((response) => {
            if(!response.ok) {
              throw new Error (
                `This is an HTTP error: The status is ${response.status}`
              )
            }
            return response.json()
          })
          .then(data => {
            setProfile(data[0].fichasCargoEfetivo[0]);
            console.log(data[0].fichasCargoEfetivo[0])
          })
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
        
    }, [nome, orgaoServidorExercicio]);
    
    return (
    <div>
      {loading && <div>Carregando...</div>}
      {profile && (
        <div>
          <h3>NOME: {profile.nome}</h3>
          <h4>Órgão: {profile.orgaoServidorExercicio.toUpperCase()}</h4>
          <h4>Cargo: {profile.cargo}</h4>
        </div>
      )}
    </div>
    )

}

export default Profile;