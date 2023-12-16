
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Separator } from '@radix-ui/react-separator'
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


// const perks = [
//   {
//     name: 'Fast Delivery',
//     Icon: ArrowDownToLine,
//     description:
//       'Get your collectibles delivered at your doorstep for as fast as 3 days.',
//   },
//   {
//     name: 'Authentic Collectibles',
//     Icon: CheckCircle,
//     description:
//       'Every collectible sold in our platform is authentic and verified by experts. Not contented? We offer a 30-day warranty for you',
//   },
//   {
//     name: 'Environmentally friendly',
//     Icon: Leaf,
//     description:
//       "We pledged that our services will utilize clean energy sources to run our website to help combat climate change.",
//   },
// ]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-left flex flex-col mt-20 items-left mb-20 '>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Your marketplace for high-quality{' '}
            <span style={{ color: '#FF8000' }}>
              collectibles
            </span>
          
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to Collectiverse. Every collectibles on our
            platform is verified by specialize appraisers and
            our team personally.
          </p>
          
        <div className=' flex justify-center items-center'>
        
        </div>
          <div className='flex flex-col sm:flex-row gap-4 mt-6' >
            <Link
              href='/products'
              className={buttonVariants()} style={{ backgroundColor: '#FF8000', color: 'white' }}>
              Browse Trending
            </Link>
            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
        </div>
        <div className="flex justify-center text-center space-x-2 ">
          <Image src="/visa-mastercard-icon-5 1.png" alt="Visa" width={800} height={800} className='item-center grayscale'/>
        </div>
        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        />
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {/* {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))} */}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
