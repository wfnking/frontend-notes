import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from './components/Layout'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <Layout>
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header>
            <h3 className='mb-2'>
              <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                <a className='text-3xl font-semibold text-orange-600 no-underline'>
                  {title}
                </a>
              </Link>
            </h3>
            <span className='mb-4 text-xs'>{date}</span>
          </header>
          <section>
            <p className='mb-8'>{description}描述信息</p>
          </section>
        </article>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = []

  const postPath = `${process.cwd()}/content/posts`

  recursiveReadfile(postPath, '')

  function recursiveReadfile(postPath, prefix) {
    const files = fs.readdirSync(postPath)

    files.map((filename) => {
      const pPath = path.join(postPath, filename)

      if (fs.lstatSync(pPath).isDirectory()) {
        recursiveReadfile(pPath, `${filename}/`)
      } else {
        const markdownWithMetadata = fs.readFileSync(pPath).toString()

        const { data } = matter(markdownWithMetadata)

        // Convert post date to format: Month day, Year
        const options = { year: 'numeric', month: 'long', day: 'numeric' }

        const { date: dateTime = 0 } = data

        const formattedDate = data.date
          ? data.date.toLocaleDateString('zh-CN', options)
          : ''

        posts.push({
          slug: prefix + filename.replace('.md', ''),
          frontmatter: {
            ...data,
            dateTime: Date.parse(new Date(dateTime)),
            date: formattedDate
          }
        })
      }
    })
  }

  let sortedPost = posts.sort((a, b) => {
    if (a.frontmatter.dateTime < b.frontmatter.dateTime) {
      return 1
    } else {
      return -1
    }
  })

  return {
    props: {
      posts: sortedPost
    }
  }
}
