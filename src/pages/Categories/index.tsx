//Components
import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetSportGamesQuery()
  const { data: gamesRpg } = useGetRpgGamesQuery()
  const { data: gamesSimulation } = useGetSimulationGamesQuery()

  if (gamesAcao && gamesLuta && gamesRpg && gamesEsportes && gamesSimulation) {
    return (
      <>
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={gamesLuta}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={gamesRpg} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={gamesSimulation}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando . . . </h4>
}

export default Categories
