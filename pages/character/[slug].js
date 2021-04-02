import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import slug from 'slug'

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <div>{character.name}</div>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await fetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()
  console.log(characters)
  return {
    paths: characters.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } }
    }),
    fallback: false // See the "fallback" section below
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0] // id son elemandan geldiği için
  // son elemanı aldık
  //data fetch
  const data = await fetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await data.json()
  return {
    props: {
      character
    } // will be passed to the page component as props
  }
}

export default CharacterDetail
