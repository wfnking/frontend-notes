import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import CodeBlock from '../components/CodeBlock'
import Head from 'next/head'

export default function Post({ title, content, frontmatter }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <p>日期: {frontmatter.date}</p>
        <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = []

  recursiveReadfile('content/posts', '')

  function recursiveReadfile(postPath, prefix) {
    const files = fs.readdirSync(postPath)

    files.map((filename) => {
      const pPath = path.join(postPath, filename)

      if (fs.lstatSync(pPath).isDirectory()) {
        recursiveReadfile(pPath, `${filename}/`)
      } else {
        paths.push({
          params: {
            slug: encodeURI((prefix + filename).replace('.md', '')).split('/')
          }
        })
      }
    })
  }
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/posts', decodeURI(slug.join('/')) + '.md'))
    .toString()

  const { data, content } = matter(markdownWithMetadata)
  // Convert post date to format: Month day, Year
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = data.date.toLocaleDateString('zh-CN', options)

  const frontmatter = {
    ...data,
    date: formattedDate
  }

  return {
    props: {
      title: data.title,
      content: `# ${data.title}\n${content}`,
      frontmatter
    }
  }
}
