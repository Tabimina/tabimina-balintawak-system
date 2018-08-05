import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'

const posts = [
  {
    title: 'Blog Post Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis ullamcorper feugiat. Curabiturut rhoncus mauris, in vestibulum eros. Fusce sed interdum urna. Maecenas tempor dictum eros, sit amet porttitor urna pharetra eget. Duis at turpis turpis. Duis lobortis est quis diam lobortis iaculis. Pellentesque pharetra metus a magna egestas tempus. Integer id est rutrum ex mollis scelerisque. Nulla posuere nibh nec tellus cursus hendrerit.',
  },
  {
    title: 'Blog Post Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis ullamcorper feugiat. Curabiturut rhoncus mauris, in vestibulum eros. Fusce sed interdum urna. Maecenas tempor dictum eros, sit amet porttitor urna pharetra eget. Duis at turpis turpis. Duis lobortis est quis diam lobortis iaculis. Pellentesque pharetra metus a magna egestas tempus. Integer id est rutrum ex mollis scelerisque. Nulla posuere nibh nec tellus cursus hendrerit.',
  },
  {
    title: 'Blog Post Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis ullamcorper feugiat. Curabiturut rhoncus mauris, in vestibulum eros. Fusce sed interdum urna. Maecenas tempor dictum eros, sit amet porttitor urna pharetra eget. Duis at turpis turpis. Duis lobortis est quis diam lobortis iaculis. Pellentesque pharetra metus a magna egestas tempus. Integer id est rutrum ex mollis scelerisque. Nulla posuere nibh nec tellus cursus hendrerit.',
  },
]

const BlogPage = () => (
  <Layout>
    {posts.map(post => <Post title={post.title} /> )}
  </Layout>
)

export default BlogPage
