import { useRouter } from 'next/router'
import Main from '../../components/Main'
import Slider from '../../components/Slider'

export default function WorksSingle() {
  const router = useRouter()
  const { pid } = router.query

  const works = [
    {
      image: '/img/thumb/chefatable-430x600.png',
      href: '1',
      title: 'Chef à Table',
    },
    {
      image: '/img/thumb/banner-homepage-4-430x600.png',
      href: '2',
      title: 'CDH',
    },
    {
      image: '/img/thumb/brewspot-430x600.png',
      href: '3',
      title: 'Brewspot',
    },
    {
      image: '/img/thumb/G16-430x600.png',
      href: '4',
      title: 'Garage 16',
    },
    {
      image: '/img/thumb/petite-soif.png',
      href: '5',
      title: 'Petite Soif',
    },
    {
      image: '/img/thumb/ttd-430x600.png',
      href: '6',
      title: 'Tonton Dany',
    },
    {
      image: '/img/thumb/winery.png',
      href: '7',
      title: 'Winery',
    },
  ]

  return (
    <>
      <Main expendTo="single-work full">
        <p>Work: {pid}</p>
      </Main>
      <Slider works={works} />
    </>
  )
}
