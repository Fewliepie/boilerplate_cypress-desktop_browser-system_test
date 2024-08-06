import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import PesquisaPage from '../pages/actions/PesquisaActions'

Given('que acesso o site', () => {
  PesquisaPage.acessarSite()
})

When('pesquiso pela palavra {string}', (palavra) => {
  PesquisaPage.preencherCampoDePesquisa(palavra)
})

Then('vejo os resultados', (datatable) => {
  datatable.hashes().forEach((element) => {
    PesquisaPage.verificarExibicaoDeResultadosDaPesquisa(element.Resultado)
  })
})
