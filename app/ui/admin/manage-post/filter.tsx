
import { PostCategoriesType, StatusPost } from '@/helpers/definitions';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'use-debounce';
import { handleParameter } from '@/utils/functions';

export function PostCategoriesFilter({
    categories
}:{
    categories: PostCategoriesType[]
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearchWithCategory = useDebouncedCallback((term: string, arg: string) => {
        const params = new URLSearchParams(searchParams);
        handleParameter(term, arg, params);
        replace(`${pathname}?${params.toString()}`);
    }, 200)
    return (
        <>
            <div className="collapse collapse-arrow">
                <label htmlFor="category-dropdown-button" className='sr-only'>Category</label>
                <input type="checkbox" className="w-full" id="category-dropdown-button"/> 
                <div className="collapse-title text-base text-gray-900">
                    Categories
                </div>
                <div className="collapse-content"> 
                    <div className="flex items-center mb-4">
                        <input 
                            id="all-categories"
                            type="radio" 
                            name="post-categories"
                            onChange={
                                (e) => handleSearchWithCategory(e.target.value, 'category')
                            }
                            defaultValue=""
                            className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label 
                            htmlFor="all-categories"
                            className="cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            All
                        </label>
                    </div>
                    {
                        categories && categories.map((category) => (
                            <div className="flex items-center mb-4" key={category.id}>
                                <input 
                                    id={category.name_post_type} 
                                    type="radio" 
                                    defaultValue={category.name_post_type} 
                                    name="post-categories" 
                                    className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onChange={(e) => handleSearchWithCategory(e.target.value, 'category')}
                                />
                                <label 
                                    htmlFor={category.name_post_type}  
                                    className="cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase"
                                >
                                    {category.name_post_type}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export function PostStatusFilter({
    allStatus
} : {
    allStatus: StatusPost[]
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearchWithStatus = useDebouncedCallback( 
        () => {
            const params = new URLSearchParams(searchParams);
            handleParameter(toDate, `to-date`, params);
            replace(`${pathname}?${params.toString()}`);
        }, 200)

    return (
        <>
            <button 
                type="button" 
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-status" 
                data-collapse-toggle="dropdown-status"
                id="status-filter"
            >
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Status</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div id="dropdown-status" className="hidden py-2 space-y-2">
                {
                    allStatus && allStatus.map((status) => (
                        <div className="flex items-center mb-4" key={status.id}>
                            <input 
                                id={status.value} 
                                type="radio"
                                defaultValue={status.value} 
                                name="status-filter"
                                onChange={(e) => handleSearchWithStatus(e.target.value, "status")}
                                className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label 
                                htmlFor={status.value}  
                                className="uppercase cursor-pointer ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                            >
                                {status.value}
                            </label>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export function DateFilter() {
    const [dateRange, setDateRange] = useState([]);
    const [startDate, endDate] = dateRange;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearchWithStatus = useDebouncedCallback(() => {
        const params = new URLSearchParams(searchParams);
        const fromDate = (new Date(startDate)).toISOString();
        const toDate = new Date(endDate).toISOString();
        handleParameter(fromDate, `from-date`, params);
        handleParameter(toDate, `to-date`, params);
        replace(`${pathname}?${params.toString()}`);
    }, 200)

    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={
                (update:any) => {
                    setDateRange(update)
                    handleSearchWithStatus()
                }
            }
            withPortal
            isClearable
            className='w-full mx-auto text-sm border-[1px] border-orange-300 rounded-3xl cursor-pointer'
        />
    )
}

export { MultiRangeSlider as default} from './multi-view-range';