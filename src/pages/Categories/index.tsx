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
        <ProductsList games={gamesAcao} title="Ação" background="black" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList games={gamesLuta} title="Luta" background="black" />
        <ProductsList games={gamesRpg} title="RPG" background="gray" />
        <ProductsList
          games={gamesSimulation}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando . . . </h4>
}

export default Categories
