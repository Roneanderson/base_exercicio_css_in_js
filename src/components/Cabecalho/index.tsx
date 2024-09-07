import styled from 'styled-components'

const Perfil = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

function Cabecalho() {
  return (
    <Perfil>
      <h1>EBAC Jobs</h1>
    </Perfil>
  )
}

export default Cabecalho
