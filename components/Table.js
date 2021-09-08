import { data } from '../data/data';

export default function Table({ description, price, vat, units }) {
  const priceFormater = new Intl.NumberFormat(undefined, {
    currency: 'Eur',
    style: 'currency',
    minimumFractionDigits: 2,
  });
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-col'>
        <div className='-my-2  sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <tbody className='bg-white divide-y divide-gray-200'>
                  <tr>
                    <td className='px-6 py-4 whitespace-nowrap w-[350px]'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 h-10 w-10 text-sm font-medium text-gray-800'>
                          {description}
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm text-gray-900'>{units}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap w-[150px]'>
                      <span className='px-2 inline-flex text-xs leading-5 font-bold rounded-full  text-green-800'>
                        {priceFormater.format(price)}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {(vat * 100).toFixed(0)}%
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <a
                        href='#'
                        className='text-gray font-medium-600 text-left'
                      >
                        {priceFormater.format((price * units * vat) / 100)}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
