//Components
import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesLuta, isLoading: isLoadingLuta } = useGetFightGamesQuery()
  const { data: gamesAcao, isLoading: isLoadingAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingEsportes } =
    useGetSportGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: gamesSimulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesAcao}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAcao}
      />
      <ProductsList
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingEsportes}
      />
      <ProductsList
        games={gamesLuta}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingLuta}
      />
      <ProductsList
        games={gamesRpg}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={gamesSimulation}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
