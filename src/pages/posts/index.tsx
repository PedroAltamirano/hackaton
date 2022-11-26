import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import supabase from 'utils/supabase'

import IProject from 'types/project'

import Post from 'components/Post'
import Mobile from 'layouts/Mobile'

interface IProps {
  projects: IProject[]
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const { data: projects } = await supabase.from('proyects').select('*')

  return {
    props: {
      projects: projects as IProject[],
    },
  }
}

const Posts = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Mobile header="posts">
    <>
      {projects?.map((project, index) => (
        <Post
          key={index}
          title={project.title}
          content={project.body}
          image={project.image}
        />
      ))}
    </>
  </Mobile>
)

export default Posts
