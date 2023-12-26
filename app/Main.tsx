import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 12

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/*<div className="space-y-2 pb-8 pt-6 md:space-y-5">*/}
        {/*  <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">*/}
        {/*    Latest*/}
        {/*  </h1>*/}
        {/*  <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">*/}
        {/*    {siteMetadata.description}*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className={'flex flex-row py-12'}>
          <div className={'flex-1'}>
            <div className={'flex flex-row items-start justify-start'}>
              <Image
                src={'/static/images/logo-clip.png'}
                alt={'JS Weekly Logo'}
                width={180}
                height={180}
              />
              <div className={'pl-2 pr-5'}>
                <h1 className={'text-3xl font-extrabold'}>JS Weekly</h1>
                <p>
                  A curated newsletter for JavaScript developer, delivering best of the week
                  content; latest tutorials, news, and more.
                </p>
                <p className={'pb-2 pt-2'}>
                  Curated by{' '}
                  <a className="underline" href={'https://twitter.com/arximughal'}>
                    Muhammad Arslan
                  </a>
                </p>
                <p>
                  <span className="mr-3">✅</span>only the best curated content
                  <br/>
                  <span className="mr-3">✅</span>no spam (I promise ✌️)
                  <br/>
                  <span className="mr-3">✅</span>one click unsubscribe
                </p>
              </div>
            </div>
          </div>
          <div className={'flex-0 flex flex-row items-center justify-end'}>
            {siteMetadata.newsletter?.provider && (
              <div className="flex items-center justify-center pt-4">
                <NewsletterForm title={'Subscribe to JS Weekly'}/>
              </div>
            )}
          </div>
        </div>
        <div className={'flex flex-col py-12 issues-container'}>
          <h1 className="text-4xl font-extrabold">Past Issues</h1>
          <p>Browse our past issues, share and discuss with friends in the comments:</p>
        </div>
        <div className="issues">
          {!posts.length && 'No issues found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const {slug, date, title, summary, tags} = post
            return (
              <div key={slug} className="float-left min-h-72 w-1/2 py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="space-y-5 xl:col-span-3">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/issues/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag}/>
                            ))}
                          </div>
                        </div>
                        {/*<div className="prose max-w-none text-gray-500 dark:text-gray-400">*/}
                        {/*  {summary}*/}
                        {/*</div>*/}
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/issues/${slug}`}
                          className="text-fuchsia-500 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex w-full justify-end text-base font-medium leading-6">
          <Link
            href="/issues"
            className="text-fuchsia-500 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
            aria-label="All posts"
          >
            All Issues &rarr;
          </Link>
        </div>
      )}
      {/*{siteMetadata.newsletter?.provider && (*/}
      {/*  <div className="flex items-center justify-center pt-4">*/}
      {/*    <NewsletterForm />*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  )
}
