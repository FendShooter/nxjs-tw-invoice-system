import InvoiceBody from '../../components/InvoiceBody';
import { data as order } from '../../data/data';
import Image from 'next/image';
import { useRouter } from 'next/router';

const priceFormater = new Intl.NumberFormat(undefined, {
  currency: 'Eur',
  style: 'currency',
  minimumFractionDigits: 2,
});
export default function DetailPage() {
  const router = useRouter();
  const params = +router.query.id;
  let data = order[2].items.splice(3, params);

  return (
    <div className='page bg-white flex flex-col'>
      <div className='flex-grow'>
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
          {data.map((item) => (
            <InvoiceBody key={item.id} item={item} />
          ))}

          <div className='border-t-2  border-double border-black/20 ' />
          <section className='flex space-x-4 pt-4  justify-end pr-6'>
            <h2 className='text-xl text-gray-500'>Subtotal</h2>
            <p className='text-xl text-gray-500 font-semibold'>
              {priceFormater.format(
                data.reduce((sum, acc) => sum + acc.price * acc.units, 0)
              )}
            </p>
          </section>
          <section className='flex space-x-4 pt-4  justify-end pr-6'>
            <h2 className='text-xl text-gray-500'>Total</h2>
            <p className='text-xl text-gray-500 font-semibold'>
              {priceFormater.format(
                data.reduce(
                  (sum, acc) =>
                    sum + ((acc.price * acc.units) / 100 + acc.vat) * 100,
                  0
                )
              )}
            </p>
          </section>
          <div className='mt-10 '>
            <p className='text-gray-500 text-xs italic'>Payment methods</p>
            <div className='w-60 h-16 relative '>
              <Image
                src='https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png'
                layout='fill'
                alt=''
                objectFit='contain'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
