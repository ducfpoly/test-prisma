import moment from 'moment';
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export function formatDate(date: Date): string {
    return moment(date).format('lll')
}

// const ArgHandleParameter = new Map([
//     ["term", "aca"],
//     ["arg", "sdc"],
//     ["searchParams", "acacsa"]
// ]);

// type HandleParameter =  {
//     term: string, 
//     arg: string,
//     pathname: string,
//     replace: (url:string) => Promise<boolean>,
//     searchParams: ReadonlyURLSearchParams
// }
// /**
//  * Handle parameter and path name
//  * @param term
//  * @param arg
//  */
export const handleParameter = (
    term: string, 
    arg: string,
    params: URLSearchParams
) => {
    if(term) {
        params.set(`${arg}`, term);
    } else {
        params.delete(`${arg}`);
    }
}
