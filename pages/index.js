import Head from 'next/head';
import InvoiceBody from '../components/InvoiceBody';
import { data } from '../data/data';
import { format, addDays } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Home() {
  const [nextPage, setNextPage] = useState([]);
  const priceFormater = new Intl.NumberFormat(undefined, {
    currency: 'Eur',
    style: 'currency',
    minimumFractionDigits: 2,
  });
  let dataNumber = data[2].items;
  let other = data[2].items.slice(3);
  if (data[2].items.length > 3) {
    dataNumber = data[2].items.slice(0, 3);
    other = data[2].items.slice(3, data[2].items.length);
  }
  // console.log(other);
  return (
    <div className=''>
      <Head>
        <title>Fast invoice</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='text-2xl'>
        <div className='page bg-white flex flex-col'>
          <header className='flex items-center p-8 justify-between pb-6 bg-blue-700 text-white border-blue-400 '>
            <h1 className='font-bold text-4xl'>
              {data[1]?.me?.name}{' '}
              <span className='text-2xl font-normal'>Solutions</span>
            </h1>

            <p>
              <span className='text-xl text-blue-200'>
                {new Date(data[0].date?.issueDate).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </span>
            </p>
          </header>
          <div className='flex-grow'>
            <div className='bg-indigo-500 h-4 ' />
            <div className='mt-10 px-8'>
              <span className='text-blue-600'> Invoice </span>:{' '}
              <span className='text-gray-700 font-medium'>
                {data[0].invoice.num}
              </span>
            </div>
            <div className='px-8 mt-10 flex justify-between items-center'>
              <div>
                <div className='text-gray-400 text-xl'>Information:</div>
                <p className='text-xl flex '>
                  <span className='pr-4'>Issue date :</span>
                  <span>
                    {format(new Date(data[0]?.date?.issueDate), 'PPP')}
                  </span>
                </p>
                <p className='text-xl flex'>
                  <span className='pr-7'>Due date :</span>
                  <span>
                    {format(addDays(data[0]?.date?.issueDate, 30), 'PPP')}
                  </span>
                  <span className='text-gray-400 italic'>(30days)</span>
                </p>
              </div>
              <div>
                <div className='text-gray-400 text-xl'>Client:</div>
                <p className='text-xl'>{data[2].client?.name}</p>
                <p className='text-xl'>{data[2].client?.address}</p>
              </div>
            </div>
            <section className='mt-16 px-8'>
              <div className='flex flex-col'>
                <div className='-my-2  sm:-mx-6 lg:-mx-8'>
                  <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50 '>
                          <tr>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs w-[350px] font-medium text-gray-500 uppercase tracking-wider'
                            >
                              Description
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                            >
                              Qty
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs w-[150px] font-medium text-gray-500 uppercase tracking-wider'
                            >
                              Price
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                            >
                              Vat
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                            >
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {dataNumber.map((item) => (
                  <InvoiceBody key={item.id} item={item} />
                ))}
              </div>

              {!other.length > 0 && (
                <div>
                  <div className='border-t-2  border-double border-black/20 ' />
                  <section className='flex space-x-4 pt-4  justify-end pr-6'>
                    <h2 className='text-xl text-gray-500'>Subtotal</h2>
                    <p className='text-xl text-gray-500 font-semibold'>
                      {priceFormater.format(
                        data[2].items.reduce(
                          (sum, acc) => sum + acc.price * acc.units,
                          0
                        )
                      )}
                    </p>
                  </section>
                  <section className='flex space-x-4 pt-4  justify-end pr-6'>
                    <h2 className='text-xl text-gray-500'>Total</h2>
                    <p className='text-xl text-gray-500 font-semibold'>
                      {priceFormater.format(
                        data[2].items.reduce(
                          (sum, acc) =>
                            sum +
                            ((acc.price * acc.units) / 100 + acc.vat) * 100,
                          0
                        )
                      )}
                    </p>
                  </section>
                  <div className='mt-10 '>
                    <p className='text-gray-500 text-xs italic'>
                      Payment methods
                    </p>
                    <div className='w-60 h-16 relative '>
                      <Image
                        src='https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png'
                        layout='fill'
                        alt=''
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
          {/* next page  */}
          <div className='text-center'>
            {other.length > 0 ? (
              <Link href={`/nextinvoice/${other.length}`}>
                <a className='text-sm mb-8 inline-block'> Next page</a>
              </Link>
            ) : (
              ''
            )}
          </div>
          <div>
            <div className='bg-indigo-500 h-4 ' />

            <div className='flex items-center p-2 justify-center bg-blue-700 text-gray-300 text-xl '>
              All rights reserved @2021
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
