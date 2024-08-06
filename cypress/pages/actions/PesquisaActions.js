import PesquisaElements from '../elements/PesquisaElements'

export default new class PesquisaPage {
  acessarSite() {
    cy.visit('/')
  }

  preencherCampoDePesquisa(texto) {
    cy.get(PesquisaElements.iptPesquisa())
      .should('be.visible')
      .type(texto)
  }

  verificarExibicaoDeResultadosDaPesquisa(texto) {
    cy.contains(texto)
      .should('be.visible')
  }
}()
