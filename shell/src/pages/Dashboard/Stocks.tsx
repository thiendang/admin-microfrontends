import React from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout.tsx';
import { MicrofrontendSlot } from 'microfrontends';
import MapOne from '../../components/Maps/MapOne.tsx';
import ChatCard from '../../components/Chat/ChatCard.tsx';

const Stocks: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-9">
        <div className="data-stats-slider-outer relative col-span-12">
          <MicrofrontendSlot className="contents" name="card-five" />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <MicrofrontendSlot className="contents" name="chart-nine" />
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5.5 py-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
          <div className="mb-7.5 flex flex-wrap items-center justify-between gap-2 px-2">
            <div>
              <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                My Stocks
              </h4>
            </div>
            <div className="relative z-20 inline-block rounded">
              <select className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
                <option value="" className="dark:bg-boxdark">
                  Short by
                </option>
                <option value="" className="dark:bg-boxdark">
                  Monthly
                </option>
                <option value="" className="dark:bg-boxdark">
                  Yearly
                </option>
              </select>
              <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z"
                    fill="#64748B"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-07-56332d03.svg"
                    alt="brand"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                    Apple Inc
                  </h5>
                  <p className="text-xs font-medium">16 Shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="mb-1 font-medium text-black dark:text-white">
                  $410.5
                </p>
                <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                  0.95%
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg"
                    alt="brand"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                    Google
                  </h5>
                  <p className="text-xs font-medium">100 Shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="mb-1 font-medium text-black dark:text-white">
                  $410.5
                </p>
                <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                  0.95%
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-10-074e50c9.svg"
                    alt="brand"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                    Tesla
                  </h5>
                  <p className="text-xs font-medium">20 Shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="mb-1 font-medium text-black dark:text-white">
                  $410.5
                </p>
                <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                  0.95%
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-13-9c3077be.svg"
                    alt="brand"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                    Twitter X
                  </h5>
                  <p className="text-xs font-medium">87 Shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="mb-1 font-medium text-black dark:text-white">
                  $410.5
                </p>
                <p className="flex items-center justify-end gap-1 text-xs font-medium text-red">
                  -0.95%
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z"
                      fill=""
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-11-cbe62bd2.svg"
                    alt="brand"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                    Microsoft
                  </h5>
                  <p className="text-xs font-medium">37 Shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="mb-1 font-medium text-black dark:text-white">
                  $410.5
                </p>
                <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                  0.95%
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-10 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:col-span-5">
          <div className="mb-7.5 flex items-center justify-between">
            <div>
              <h3 className="text-title-sm2 font-bold text-black dark:text-white">
                Trending Stocks
              </h3>
            </div>
            <div>
              <div className="relative flex">
                <button className="text-[#98A6AD] hover:text-body">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75C1.00736 6.75 0 7.75736 0 9C0 10.2426 1.00736 11.25 2.25 11.25Z"
                      fill=""
                    ></path>
                    <path
                      d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                      fill=""
                    ></path>
                    <path
                      d="M15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25Z"
                      fill=""
                    ></path>
                  </svg>
                </button>
                <div className="absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark hidden">
                  <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                    <svg
                      className="fill-current"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_62_9787)">
                        <path
                          d="M15.55 2.97499C15.55 2.77499 15.475 2.57499 15.325 2.42499C15.025 2.12499 14.725 1.82499 14.45 1.52499C14.175 1.24999 13.925 0.974987 13.65 0.724987C13.525 0.574987 13.375 0.474986 13.175 0.449986C12.95 0.424986 12.75 0.474986 12.575 0.624987L10.875 2.32499H2.02495C1.17495 2.32499 0.449951 3.02499 0.449951 3.89999V14C0.449951 14.85 1.14995 15.575 2.02495 15.575H12.15C13 15.575 13.725 14.875 13.725 14V5.12499L15.35 3.49999C15.475 3.34999 15.55 3.17499 15.55 2.97499ZM8.19995 8.99999C8.17495 9.02499 8.17495 9.02499 8.14995 9.02499L6.34995 9.62499L6.94995 7.82499C6.94995 7.79999 6.97495 7.79999 6.97495 7.77499L11.475 3.27499L12.725 4.49999L8.19995 8.99999ZM12.575 14C12.575 14.25 12.375 14.45 12.125 14.45H2.02495C1.77495 14.45 1.57495 14.25 1.57495 14V3.87499C1.57495 3.62499 1.77495 3.42499 2.02495 3.42499H9.72495L6.17495 6.99999C6.04995 7.12499 5.92495 7.29999 5.87495 7.49999L4.94995 10.3C4.87495 10.5 4.92495 10.675 5.02495 10.85C5.09995 10.95 5.24995 11.1 5.52495 11.1H5.62495L8.49995 10.15C8.67495 10.1 8.84995 9.97499 8.97495 9.84999L12.575 6.24999V14ZM13.5 3.72499L12.25 2.49999L13.025 1.72499C13.225 1.92499 14.05 2.74999 14.25 2.97499L13.5 3.72499Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_62_9787">
                          <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    Edit
                  </button>
                  <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                    <svg
                      className="fill-current"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.225 2.20005H10.3V1.77505C10.3 1.02505 9.70005 0.425049 8.95005 0.425049H7.02505C6.27505 0.425049 5.67505 1.02505 5.67505 1.77505V2.20005H3.75005C3.02505 2.20005 2.42505 2.80005 2.42505 3.52505V4.27505C2.42505 4.82505 2.75005 5.27505 3.22505 5.47505L3.62505 13.75C3.67505 14.775 4.52505 15.575 5.55005 15.575H10.4C11.425 15.575 12.275 14.775 12.325 13.75L12.75 5.45005C13.225 5.25005 13.55 4.77505 13.55 4.25005V3.50005C13.55 2.80005 12.95 2.20005 12.225 2.20005ZM6.82505 1.77505C6.82505 1.65005 6.92505 1.55005 7.05005 1.55005H8.97505C9.10005 1.55005 9.20005 1.65005 9.20005 1.77505V2.20005H6.85005V1.77505H6.82505ZM3.57505 3.52505C3.57505 3.42505 3.65005 3.32505 3.77505 3.32505H12.225C12.325 3.32505 12.425 3.40005 12.425 3.52505V4.27505C12.425 4.37505 12.35 4.47505 12.225 4.47505H3.77505C3.67505 4.47505 3.57505 4.40005 3.57505 4.27505V3.52505V3.52505ZM10.425 14.45H5.57505C5.15005 14.45 4.80005 14.125 4.77505 13.675L4.40005 5.57505H11.625L11.25 13.675C11.2 14.1 10.85 14.45 10.425 14.45Z"
                        fill=""
                      ></path>
                      <path
                        d="M8.00005 8.1001C7.70005 8.1001 7.42505 8.3501 7.42505 8.6751V11.8501C7.42505 12.1501 7.67505 12.4251 8.00005 12.4251C8.30005 12.4251 8.57505 12.1751 8.57505 11.8501V8.6751C8.57505 8.3501 8.30005 8.1001 8.00005 8.1001Z"
                        fill=""
                      ></path>
                      <path
                        d="M9.99994 8.60004C9.67494 8.57504 9.42494 8.80004 9.39994 9.12504L9.24994 11.325C9.22494 11.625 9.44994 11.9 9.77494 11.925C9.79994 11.925 9.79994 11.925 9.82494 11.925C10.1249 11.925 10.3749 11.7 10.3749 11.4L10.5249 9.20004C10.5249 8.87504 10.2999 8.62504 9.99994 8.60004Z"
                        fill=""
                      ></path>
                      <path
                        d="M5.97497 8.60004C5.67497 8.62504 5.42497 8.90004 5.44997 9.20004L5.62497 11.4C5.64997 11.7 5.89997 11.925 6.17497 11.925C6.19997 11.925 6.19997 11.925 6.22497 11.925C6.52497 11.9 6.77497 11.625 6.74997 11.325L6.57497 9.12504C6.57497 8.80004 6.29997 8.57504 5.97497 8.60004Z"
                        fill=""
                      ></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[5px] border border-stroke p-5 dark:border-strokedark">
              <div className="mb-5.5 flex items-center justify-between">
                <div className="flex items-center gap-4.5">
                  <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src="https://react-demo.tailadmin.com/assets/brand-14-d86b526b.svg"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black dark:text-white">
                      Netflix
                    </h5>
                    <p className="text-xs font-medium">$12,453.00</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="mb-0.5 flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                    0.14%
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                  <p className="text-xs font-medium text-meta-3">+ $1,984.00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-7.5 py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                  Short
                </button>
                <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-7.5 py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                  Buy
                </button>
              </div>
            </div>
            <div className="rounded-[5px] border border-stroke p-5 dark:border-strokedark">
              <div className="mb-5.5 flex items-center justify-between">
                <div className="flex items-center gap-4.5">
                  <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src="https://react-demo.tailadmin.com/assets/brand-15-739867d0.svg"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black dark:text-white">
                      Apple Inc.
                    </h5>
                    <p className="text-xs font-medium">$132,453.00</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="mb-0.5 flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                    1.03%
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                  <p className="text-xs font-medium text-meta-3">+ $2,634.00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-7.5 py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                  Short
                </button>
                <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-7.5 py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                  Buy
                </button>
              </div>
            </div>
            <div className="rounded-[5px] border border-stroke p-5 dark:border-strokedark">
              <div className="mb-5.5 flex items-center justify-between">
                <div className="flex items-center gap-4.5">
                  <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                    <img
                      src="https://react-demo.tailadmin.com/assets/brand-16-75b0d64d.svg"
                      alt="brand"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black dark:text-white">
                      Meta
                    </h5>
                    <p className="text-xs font-medium">$31,428.00</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="mb-0.5 flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                    0.08%
                    <svg
                      className="fill-current"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                        fill=""
                      ></path>
                    </svg>
                  </p>
                  <p className="text-xs font-medium text-meta-3">+ $2,432.00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-7.5 py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                  Short
                </button>
                <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-7.5 py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:p-7.5 xl:col-span-7">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                Latest Transaction
              </h4>
            </div>
            <div className="relative z-20 inline-block rounded">
              <select className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
                <option value="" className="dark:bg-boxdark">
                  Last 7 days
                </option>
                <option value="" className="dark:bg-boxdark">
                  Last 15 days
                </option>
              </select>
              <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z"
                    fill="#64748B"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
              <div className="flex items-center gap-4.5 sm:col-span-3 2xl:col-span-2">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-15-739867d0.svg"
                    alt="brand"
                  />
                </div>
                <div className="hidden sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Apple Inc.
                  </h5>
                  <p className="text-xs font-medium">Buy Stock</p>
                </div>
              </div>
              <div className="hidden sm:col-span-2 sm:block">
                <h5 className="font-bold text-black dark:text-white">
                  Interest rate
                </h5>
                <p className="text-xs font-medium">3.8%</p>
              </div>
              <div className="hidden xsm:block sm:col-span-1 2xl:col-span-2">
                <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-meta-3">
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    ></path>
                  </svg>
                  3.69%
                </p>
                <p className="text-xs">Ratio</p>
              </div>
              <div className="text-right sm:col-span-2">
                <h5 className="font-bold text-black dark:text-white">
                  + $9346
                </h5>
                <p className="text-xs font-medium">20 Sep, 27</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
              <div className="flex items-center gap-4.5 sm:col-span-3 2xl:col-span-2">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-17-24312e1e.svg"
                    alt="brand"
                  />
                </div>
                <div className="hidden sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Amazon
                  </h5>
                  <p className="text-xs font-medium">Buy Stock</p>
                </div>
              </div>
              <div className="hidden sm:col-span-2 sm:block">
                <h5 className="font-bold text-black dark:text-white">
                  Interest rate
                </h5>
                <p className="text-xs font-medium">2.7%</p>
              </div>
              <div className="hidden xsm:block sm:col-span-1 2xl:col-span-2">
                <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-meta-3">
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    ></path>
                  </svg>
                  3.69%
                </p>
                <p className="text-xs">Ratio</p>
              </div>
              <div className="text-right sm:col-span-2">
                <h5 className="font-bold text-black dark:text-white">
                  + $6879
                </h5>
                <p className="text-xs font-medium">20 Sep, 27</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
              <div className="flex items-center gap-4.5 sm:col-span-3 2xl:col-span-2">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-14-d86b526b.svg"
                    alt="brand"
                  />
                </div>
                <div className="hidden sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Netflix
                  </h5>
                  <p className="text-xs font-medium">Buy Stock</p>
                </div>
              </div>
              <div className="hidden sm:col-span-2 sm:block">
                <h5 className="font-bold text-black dark:text-white">
                  Interest rate
                </h5>
                <p className="text-xs font-medium">2.5%</p>
              </div>
              <div className="hidden xsm:block sm:col-span-1 2xl:col-span-2">
                <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-red">
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z"
                      fill=""
                    ></path>
                  </svg>
                  -3.69%
                </p>
                <p className="text-xs">Ratio</p>
              </div>
              <div className="text-right sm:col-span-2">
                <h5 className="font-bold text-black dark:text-white">
                  - $1439
                </h5>
                <p className="text-xs font-medium">20 Sep, 27</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
              <div className="flex items-center gap-4.5 sm:col-span-3 2xl:col-span-2">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-18-837df0ac.svg"
                    alt="brand"
                  />
                </div>
                <div className="hidden sm:block">
                  <h5 className="font-bold text-black dark:text-white">IBM</h5>
                  <p className="text-xs font-medium">Buy Stock</p>
                </div>
              </div>
              <div className="hidden sm:col-span-2 sm:block">
                <h5 className="font-bold text-black dark:text-white">
                  Interest rate
                </h5>
                <p className="text-xs font-medium">1.8%</p>
              </div>
              <div className="hidden xsm:block sm:col-span-1 2xl:col-span-2">
                <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-red">
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z"
                      fill=""
                    ></path>
                  </svg>
                  -3.69%
                </p>
                <p className="text-xs">Ratio</p>
              </div>
              <div className="text-right sm:col-span-2">
                <h5 className="font-bold text-black dark:text-white">
                  - $2329
                </h5>
                <p className="text-xs font-medium">20 Sep, 27</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
              <div className="flex items-center gap-4.5 sm:col-span-3 2xl:col-span-2">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-16-75b0d64d.svg"
                    alt="brand"
                  />
                </div>
                <div className="hidden sm:block">
                  <h5 className="font-bold text-black dark:text-white">Meta</h5>
                  <p className="text-xs font-medium">Buy Stock</p>
                </div>
              </div>
              <div className="hidden sm:col-span-2 sm:block">
                <h5 className="font-bold text-black dark:text-white">
                  Interest rate
                </h5>
                <p className="text-xs font-medium">3.7%</p>
              </div>
              <div className="hidden xsm:block sm:col-span-1 2xl:col-span-2">
                <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-meta-3">
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    ></path>
                  </svg>
                  3.69%
                </p>
                <p className="text-xs">Ratio</p>
              </div>
              <div className="text-right sm:col-span-2">
                <h5 className="font-bold text-black dark:text-white">
                  + $1026
                </h5>
                <p className="text-xs font-medium">20 Sep, 27</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
              <div className="flex items-center gap-4.5 sm:col-span-3 2xl:col-span-2">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-19-c0e56dc3.svg"
                    alt="brand"
                  />
                </div>
                <div className="hidden sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Microsoft
                  </h5>
                  <p className="text-xs font-medium">Buy Stock</p>
                </div>
              </div>
              <div className="hidden sm:col-span-2 sm:block">
                <h5 className="font-bold text-black dark:text-white">
                  Interest rate
                </h5>
                <p className="text-xs font-medium">3.7%</p>
              </div>
              <div className="hidden xsm:block sm:col-span-1 2xl:col-span-2">
                <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-meta-3">
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    ></path>
                  </svg>
                  3.69%
                </p>
                <p className="text-xs">Ratio</p>
              </div>
              <div className="text-right sm:col-span-2">
                <h5 className="font-bold text-black dark:text-white">
                  + $3226
                </h5>
                <p className="text-xs font-medium">20 Sep, 27</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8">
              <div className="flex items-center gap-4.5 sm:col-span-3 2xl:col-span-2">
                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                  <img
                    src="https://react-demo.tailadmin.com/assets/brand-20-41816a90.svg"
                    alt="brand"
                  />
                </div>
                <div className="hidden sm:block">
                  <h5 className="font-bold text-black dark:text-white">
                    Tesla
                  </h5>
                  <p className="text-xs font-medium">Buy Stock</p>
                </div>
              </div>
              <div className="hidden sm:col-span-2 sm:block">
                <h5 className="font-bold text-black dark:text-white">
                  Interest rate
                </h5>
                <p className="text-xs font-medium">3.7%</p>
              </div>
              <div className="hidden xsm:block sm:col-span-1 2xl:col-span-2">
                <p className="mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 text-red">
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z"
                      fill=""
                    ></path>
                  </svg>
                  -1.24%
                </p>
                <p className="text-xs">Ratio</p>
              </div>
              <div className="text-right sm:col-span-2">
                <h5 className="font-bold text-black dark:text-white">
                  - $6426
                </h5>
                <p className="text-xs font-medium">20 Sep, 27</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <MicrofrontendSlot className="contents" name="table-four" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Stocks;
